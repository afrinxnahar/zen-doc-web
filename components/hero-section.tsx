"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Terminal, Sparkles, Copy, Check } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function HeroSection() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const installCommand = "npm install -g zendoc-cli"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32 w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            {t("hero.badge")}
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {t("hero.title")
              .split(" ")
              .map((word, index) => {
                if (word === "Documentation") {
                  return (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      {word}{" "}
                    </span>
                  )
                }
                return word + " "
              })}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/signup">
              <Button size="lg" className="px-8 py-6 text-lg">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent">
                {t("hero.cta.secondary")}
              </Button>
            </Link>
          </div>

          {/* Install command */}
          <div className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-3">{t("hero.install.label")}</p>
            <div className="flex items-center bg-muted rounded-lg p-4 font-mono text-sm">
              <Terminal className="mr-3 h-4 w-4 text-muted-foreground" />
              <code className="flex-1 text-left">{installCommand}</code>
              <Button variant="ghost" size="sm" onClick={copyToClipboard} className="ml-2 h-8 w-8 p-0">
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
