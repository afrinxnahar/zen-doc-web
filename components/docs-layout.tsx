"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { Terminal, Search, Menu, X } from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "CLI Reference",
    items: [
      { title: "Commands", href: "/docs/commands" },
      { title: "Configuration", href: "/docs/configuration" },
      { title: "Templates", href: "/docs/templates" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", href: "/docs/api/auth" },
      { title: "Endpoints", href: "/docs/api/endpoints" },
      { title: "Rate Limits", href: "/docs/api/limits" },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "React Project", href: "/docs/examples/react" },
      { title: "Node.js API", href: "/docs/examples/nodejs" },
      { title: "Python Package", href: "/docs/examples/python" },
    ],
  },
]

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6" />
            <span className="font-bold text-xl">ZenDoc</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documentation..." className="pl-10" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block
          top-16 md:top-0
        `}
        >
          <div className="p-6 space-y-6 h-full overflow-y-auto">
            {navigation.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-0">{children}</main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
