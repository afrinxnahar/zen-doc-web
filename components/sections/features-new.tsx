"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Sparkles, Terminal, Zap } from "lucide-react";

const features = [
  {
    Icon: Terminal,
    title: "One Command Setup",
    description:
      "Generate comprehensive documentation with a single CLI command. No complex configuration required.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Sparkles,
    title: "AI-Powered Analysis",
    description:
      "Leverages Google Gemini AI to understand your code structure and generate intelligent documentation.",

    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-4",
  },
  {
    Icon: Zap,
    title: "Lightning Fast",
    description:
      "Process thousands of files in seconds. Optimized for performance with intelligent caching.",
    background: <img className="absolute -right-20 -top-20 bg-red-500" />,
    className: "lg:col-start-4 lg:col-end-5",
  },
];

export function BentoDemo() {
  return (
    <section className="py-20 md:py-32 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful features for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              modern teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline your documentation workflow and
            boost team productivity.
          </p>
        </div>

        <BentoGrid className="lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.title} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
