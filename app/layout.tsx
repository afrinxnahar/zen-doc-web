
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import { I18nProvider } from "@/components/i18n/lingo-provider"
import { Toaster } from "@/components/ui/toaster"
import LenisProvider from "@/lib/providers/LenisProvider"
import { LingoProviderWrapper, loadDictionary } from "lingo.dev/react/client";



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zen Doc - AI-Powered Documentation Generator",
  description: "Generate beautiful documentation from any codebase using Google Gemini AI — all with one command.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LingoProviderWrapper loadDictionary={(locale) => loadDictionary(locale)}>


          <I18nProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <AuthProvider>
                <LenisProvider>
                  {children}
                  <Toaster />
                </LenisProvider>
              </AuthProvider>
            </ThemeProvider>
          </I18nProvider>
        </LingoProviderWrapper>
      </body>
    </html>
  )
}
