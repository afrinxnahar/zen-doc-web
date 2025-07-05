"use client"

import { useI18n } from "@/components/i18n/lingo-provider"

export function useTranslation() {
  const { locale, isLoading, translations } = useI18n()

  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split(".")
    let value = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return defaultValue || key
      }
    }

    return typeof value === "string" ? value : defaultValue || key
  }

  return {
    t,
    locale,
    isLoading,
  }
}

// Helper function for static translations
export function createTranslation(key: string, defaultValue?: string) {
  return {
    key,
    defaultValue: defaultValue || key,
  }
}
