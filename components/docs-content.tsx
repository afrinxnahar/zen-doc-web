"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Terminal, Copy, Check, ArrowRight, Book, Zap, Code } from "lucide-react"
import { useState } from "react"

export function DocsContent() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const installCommand = "npm install -g zendoc-cli"
  const basicUsage = "zendoc generate --input ./src --output ./docs"

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">
            <Book className="mr-1 h-3 w-3" />
            Documentation
          </Badge>
        </div>
        <h1 className="text-4xl font-bold">ZenDoc Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to use ZenDoc to generate beautiful documentation from your codebase using AI.
        </p>
      </div>

      <Separator />

      {/* Quick Start */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Quick Start</h2>
          <p className="text-muted-foreground">Get up and running with ZenDoc in less than 5 minutes.</p>
        </div>

        <div className="grid gap-6">
          {/* Installation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Terminal className="h-5 w-5" />
                <span>1. Installation</span>
              </CardTitle>
              <CardDescription>Install ZenDoc CLI globally using npm</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <code>{installCommand}</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(installCommand, "install")}>
                    {copiedCode === "install" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>2. Basic Usage</span>
              </CardTitle>
              <CardDescription>Generate documentation for your project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <code>{basicUsage}</code>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(basicUsage, "usage")}>
                    {copiedCode === "usage" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                This command will analyze your source code in the <code>./src</code> directory and generate
                documentation in the <code>./docs</code> folder.
              </p>
            </CardContent>
          </Card>

          {/* API Key */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>3. Configure API Key</span>
              </CardTitle>
              <CardDescription>Set up your Google Gemini API key for AI-powered documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <code>zendoc config --api-key YOUR_GEMINI_API_KEY</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("zendoc config --api-key YOUR_GEMINI_API_KEY", "config")}
                  >
                    {copiedCode === "config" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-blue-900 dark:text-blue-100">Get your API key</p>
                  <p className="text-blue-700 dark:text-blue-300">
                    Visit the Google AI Studio to get your free Gemini API key.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Features Overview */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Key Features</h2>
          <p className="text-muted-foreground">
            Discover what makes ZenDoc the perfect documentation tool for developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Analysis</CardTitle>
              <CardDescription>
                Leverages Google Gemini to understand your code structure and generate intelligent documentation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Automatic code analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Context-aware documentation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Smart formatting and structure
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multiple Output Formats</CardTitle>
              <CardDescription>Export your documentation in various formats to suit your workflow.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Markdown files
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Static HTML sites
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  PDF documents
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Language Agnostic</CardTitle>
              <CardDescription>Works with any programming language or framework out of the box.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  JavaScript/TypeScript
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Python, Java, C++
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  And many more...
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Git Integration</CardTitle>
              <CardDescription>
                Seamlessly integrates with your existing Git workflow and CI/CD pipelines.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Automatic change detection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  CI/CD integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  Version control friendly
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Next Steps */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
          <p className="text-muted-foreground">Ready to dive deeper? Here are some recommended next steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">CLI Reference</CardTitle>
              <CardDescription>Explore all available commands and options</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full justify-between">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Configuration</CardTitle>
              <CardDescription>Customize ZenDoc to fit your project needs</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full justify-between">
                Configure
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Examples</CardTitle>
              <CardDescription>See ZenDoc in action with real-world examples</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full justify-between">
                View Examples
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
