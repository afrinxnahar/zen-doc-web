"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Terminal,
  Zap,
  FileText,
  Code,
  GitBranch,
  Sparkles,
  Clock,
  Shield,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "One Command Setup",
    description:
      "Generate comprehensive documentation with a single CLI command. No complex configuration required.",
    badge: "Easy",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description:
      "Leverages Google Gemini AI to understand your code structure and generate intelligent documentation.",
    badge: "Smart",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process thousands of files in seconds. Optimized for performance with intelligent caching.",
    badge: "Fast",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 w-full" id="features">
      <div className="container mx-auto px-4">
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
            ZenDoc brings together AI and developer-first design to deliver
            documentation that drives clarity and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
