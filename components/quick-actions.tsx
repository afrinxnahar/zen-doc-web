import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Terminal, FileText, Settings, Zap } from "lucide-react"

const actions = [
  {
    title: "Generate New Docs",
    description: "Create documentation for a new project",
    icon: FileText,
    action: "Generate",
    variant: "default" as const,
  },
  {
    title: "Run CLI Command",
    description: "Execute ZenDoc CLI with custom parameters",
    icon: Terminal,
    action: "Run",
    variant: "outline" as const,
  },
  {
    title: "Configure Settings",
    description: "Update your documentation preferences",
    icon: Settings,
    action: "Configure",
    variant: "outline" as const,
  },
  {
    title: "Upgrade Plan",
    description: "Get more credits and advanced features",
    icon: Zap,
    action: "Upgrade",
    variant: "secondary" as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks to help you get started</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <action.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{action.title}</h3>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">{action.description}</p>
              <Button variant={action.variant} size="sm" className="w-full">
                {action.action}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
