"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Zap, FileText, Code, GitBranch, Sparkles, Clock, Shield, Palette, Rocket, Layers, BarChart2, Search, MessageCircle, Globe, Package, Filter, CreditCard, BrainCircuit, Settings } from "lucide-react"
import { BackgroundBeams } from "./background-beams"

const features = [
  {
    icon: Terminal,
    title: "One-command CLI Tool",
    description: "Generate comprehensive documentation instantly with `npx zen-doc generate`. No complex setup required.",
    badge: "Easy",
  },
  {
    icon: Settings,
    title: "Prompt-driven Configuration",
    description: "Interactive setup to create and customize `zen.config.js` with ease.",
    badge: "User-friendly",
  },
  {
    icon: BrainCircuit,
    title: "AI-generated Content",
    description: "Utilizes advanced models like Google Gemini to produce human-readable documentation from your code.",
    badge: "Smart",
  },
  {
    icon: Rocket,
    title: "Astro-powered Static Doc Site",
    description: "Builds a fast, static documentation site using Astro for seamless browsing.",
    badge: "Fast",
  },
  {
    icon: CreditCard,
    title: "UseAutumn and Stripe Integration",
    description: "Implements a credit-based payment system with Autumn and Stripe for flexible billing.",
    badge: "Secure",
  },
  {
    icon: Filter,
    title: "Automatic Non-code Directory Skip",
    description: "Smartly skips directories like `node_modules` and `dist` during scanning.",
    badge: "Efficient",
  },
  {
    icon: Package,
    title: "Multi-package Manager Support",
    description: "Compatible with npm, yarn, pnpm, and bun for versatile project integration.",
    badge: "Flexible",
  },
  {
    icon: Globe,
    title: "Multilingual Support with Lingo.dev",
    description: "Offers automatic translation and language expansion for global accessibility.",
    badge: "Inclusive",
  },
  {
    icon: MessageCircle,
    title: "Chatbot Support with Tambo AI",
    description: "Provides an AI assistant to guide users through the documentation process.",
    badge: "Helpful",
  },
  {
    icon: Palette,
    title: "Theme Customization for Generated Docs",
    description: "Customize the look and feel of your documentation.",
    badge: "Coming Soon",
  },
  {
    icon: Search,
    title: "AI-powered Search Inside Documentation",
    description: "Enable intelligent search within your docs.",
    badge: "Coming Soon",
  },
  {
    icon: BarChart2,
    title: "Component Usage Visualization",
    description: "Visualize how components are used in your project.",
    badge: "Coming Soon",
  },
  {
    icon: GitBranch,
    title: "Integration with GitHub for Auto-deployment",
    description: "Automate deployment of docs via GitHub.",
    badge: "Coming Soon",
  },
  {
    icon: Layers,
    title: "Support for Monorepo Structures",
    description: "Extend documentation to monorepo setups.",
    badge: "Coming Soon",
  },
  {
    icon: Code,
    title: "Support for Multiple Frameworks",
    description: "Expand compatibility to various frameworks.",
    badge: "Coming Soon",
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
            Zen Doc combines the power of AI with developer-friendly tools like lingo.dev, Tambo AI etc. to create documentation that actually helps
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
