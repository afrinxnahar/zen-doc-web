import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, GitBranch, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "documentation",
    title: "Generated API docs for user-service",
    description: "Processed 23 files",
    time: "2 hours ago",
    icon: FileText,
    status: "completed",
  },
  {
    id: 2,
    type: "sync",
    title: "Synced with main branch",
    description: "Updated 5 documentation files",
    time: "4 hours ago",
    icon: GitBranch,
    status: "completed",
  },
  {
    id: 3,
    type: "documentation",
    title: "Generated component library docs",
    description: "Processed 45 files",
    time: "1 day ago",
    icon: FileText,
    status: "completed",
  },
  {
    id: 4,
    type: "scheduled",
    title: "Scheduled documentation update",
    description: "Will run at 9:00 AM tomorrow",
    time: "Scheduled",
    icon: Clock,
    status: "pending",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest documentation generations and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  <Badge variant={activity.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
