"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useI18n } from "@/components/i18n/lingo-provider"
import { supportedLocales } from "@/lib/i18n/config"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const currentLocale = supportedLocales.find((l) => l.code === locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLocale?.flag}</span>
          <span className="hidden md:inline">{currentLocale?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {supportedLocales.map((supportedLocale) => (
          <DropdownMenuItem
            key={supportedLocale.code}
            onClick={() => setLocale(supportedLocale.code)}
            className={`flex items-center gap-2 ${locale === supportedLocale.code ? "bg-accent" : ""}`}
          >
            <span>{supportedLocale.flag}</span>
            <span>{supportedLocale.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
