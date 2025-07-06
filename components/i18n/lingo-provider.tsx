"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { SupportedLocale } from "@/lib/i18n/config"
import { defaultLocale } from "@/lib/i18n/config"

interface I18nContextType {
  locale: SupportedLocale
  setLocale: (locale: SupportedLocale) => void
  isLoading: boolean
  translations: Record<string, any>
}

const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  setLocale: () => { },
  isLoading: false,
  translations: {},
})

// Import English translations directly
const englishTranslations = {
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    create: "Create",
    back: "Back",
    next: "Next",
    previous: "Previous",
    close: "Close",
    open: "Open",
  },
  navigation: {
    home: "Home",
    features: "Features",
    documentation: "Documentation",
    pricing: "Pricing",
    dashboard: "Dashboard",
    settings: "Settings",
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign Out",
  },
  hero: {
    title: "Generate Documentation from Any Codebase",
    subtitle:
      "Zen Doc is an AI-powered CLI tool that automatically generates comprehensive documentation from your codebase using advanced AI — all with one simple command.",
    cta: {
      primary: "Try Zen Doc CLI",
      secondary: "View Documentation",
    },
    install: {
      label: "Install with npm:",
      command: "npm install -g zendoc-cli",
    },
    badge: "Powered by Google Gemini AI",
  },
  // Add more translations as needed
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>(defaultLocale)
  const [isLoading, setIsLoading] = useState(false)
  const [translations, setTranslations] = useState(englishTranslations)

  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("zendoc-locale", newLocale)
      document.documentElement.lang = newLocale
    }

    // For now, we'll use English translations for all locales
    // In a real implementation, you would load the appropriate translation file
    setTranslations(englishTranslations)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("zendoc-locale") as SupportedLocale
      const browserLocale = navigator.language.split("-")[0] as SupportedLocale
      const initialLocale = savedLocale || browserLocale || defaultLocale
      setLocaleState(initialLocale)
      document.documentElement.lang = initialLocale
    }
  }, [])

  return <I18nContext.Provider value={{ locale, setLocale, isLoading, translations }}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
