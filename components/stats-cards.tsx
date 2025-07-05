"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Zap, Clock, TrendingUp } from "lucide-react"
import { useUserData } from "@/components/user-data-provider"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useAuth } from "@/components/auth-provider"

export function StatsCards() {
  const { user } = useAuth()
  const { credits } = useUserData()
  const [stats, setStats] = useState({
    totalGenerations: 0,
    filesProcessed: 0,
    timeSaved: 0,
  })

  const supabase = createClient()

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.id) return

      try {
        // Get total documentation generations
        const { count: totalGenerations } = await supabase
          .from("documentation_generations")
          .select("*", { count: "exact", head: true })
          .eq("user_id", user.id)

        // Get total files processed
        const { data: generations } = await supabase
          .from("documentation_generations")
          .select("files_processed")
          .eq("user_id", user.id)

        const filesProcessed = generations?.reduce((sum, gen) => sum + (gen.files_processed || 0), 0) || 0

        // Estimate time saved (assuming 2 minutes per file)
        const timeSaved = Math.round((filesProcessed * 2) / 60) // Convert to hours

        setStats({
          totalGenerations: totalGenerations || 0,
          filesProcessed,
          timeSaved,
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      }
    }

    fetchStats()
  }, [user?.id])

  const statsData = [
    {
      title: "Credits Used",
      value: credits?.credits_used?.toString() || "0",
      change: "+12%",
      changeType: "positive" as const,
      icon: Zap,
      description: "This month",
    },
    {
      title: "Files Processed",
      value: stats.filesProcessed.toString(),
      change: "+8%",
      changeType: "positive" as const,
      icon: FileText,
      description: "Total files",
    },
    {
      title: "Docs Generated",
      value: stats.totalGenerations.toString(),
      change: "+23%",
      changeType: "positive" as const,
      icon: Clock,
      description: "This month",
    },
    {
      title: "Time Saved",
      value: `${stats.timeSaved}h`,
      change: "+15%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Estimated",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge variant={stat.changeType === "positive" ? "default" : "secondary"} className="text-xs">
                {stat.change}
              </Badge>
              <span>{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
