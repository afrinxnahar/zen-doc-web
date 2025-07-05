"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Zap, FileText, Code, GitBranch, Sparkles, Clock, Shield, Palette } from "lucide-react"

const features = [
  {
    icon: Terminal,
    title: "One Command Setup",
    description: "Generate comprehensive documentation with a single CLI command. No complex configuration required.",
    badge: "Easy",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description: "Leverages Google Gemini AI to understand your code structure and generate intelligent documentation.",
    badge: "Smart",
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    description:
      "Export documentation in Markdown, HTML, PDF, or integrate directly with popular documentation platforms.",
    badge: "Flexible",
  },
  {
    icon: Code,
    title: "Language Agnostic",
    description: "Works with any programming language or framework. From JavaScript to Python, React to Django.",
    badge: "Universal",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description:
      "Automatically detects changes and updates documentation. Seamlessly integrates with your Git workflow.",
    badge: "Automated",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of files in seconds. Optimized for performance with intelligent caching.",
    badge: "Fast",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Watch mode automatically regenerates docs when your code changes. Perfect for active development.",
    badge: "Live",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your code never leaves your machine. All processing happens locally with secure API calls.",
    badge: "Secure",
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description: "Choose from beautiful pre-built themes or create your own. Match your brand and style.",
    badge: "Stylish",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              perfect docs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ZenDoc combines the power of AI with developer-friendly tools to create documentation that actually helps
            your team and users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-muted"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
