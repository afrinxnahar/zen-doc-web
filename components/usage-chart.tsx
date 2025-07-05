"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UsageChart() {
  // Mock data for the chart
  const data = [
    { day: "Mon", credits: 45 },
    { day: "Tue", credits: 52 },
    { day: "Wed", credits: 38 },
    { day: "Thu", credits: 61 },
    { day: "Fri", credits: 55 },
    { day: "Sat", credits: 23 },
    { day: "Sun", credits: 31 },
  ]

  const maxCredits = Math.max(...data.map((d) => d.credits))

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Weekly Usage</CardTitle>
            <CardDescription>Credits consumed over the last 7 days</CardDescription>
          </div>
          <Badge variant="outline">This Week</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium">{item.day}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(item.credits / maxCredits) * 100}%` }}
                    />
                  </div>
                  <div className="text-sm font-medium w-8 text-right">{item.credits}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
