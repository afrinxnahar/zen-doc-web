"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Home, ArrowLeft, FileQuestion } from "lucide-react"
import notFoundImg from "@/public/not-found.png"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-3xl w-[2/3] mx-auto text-center">


        <Card className="relative overflow-hidden">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center space-x-2 mt-8 mb-4 cursor-pointer">
            <Image src={logo} alt="Zen Doc Logo" width={32} height={32} className="h-14 w-14" />
            <span className="font-bold text-2xl">Zen Doc</span>
          </Link>
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />

          <CardContent className="relative px-12 py-4 space-y-8">
            {/* 404 Icon */}
            <div className="mx-auto w-60 h-60 rounded-full flex items-center justify-center mb-6">
              <Image src={notFoundImg} alt="Not Found" width={300} height={300} />
            </div>

            {/* Error Code */}
            <div className="space-y-2">
              <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/">
                <Button size="lg" className="px-8">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 bg-transparent" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/docs" className="text-primary hover:underline">
                  Documentation
                </Link>
                <Link href="/dashboard" className="text-primary hover:underline">
                  Dashboard
                </Link>
                <Link href="/auth/signin" className="text-primary hover:underline">
                  Sign In
                </Link>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Fun Message */}
            <div className="pt-4">
              <p className="text-xs text-muted-foreground italic">
                "The best documentation is the one that exists." - Every Developer Ever
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
