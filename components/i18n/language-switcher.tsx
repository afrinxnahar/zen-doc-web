
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { supportedLocales } from "@/lib/i18n/config"
import { useLang } from "./lingo-provider";

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  const currentLocale = supportedLocales.find((l) => l.code === lang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLocale?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {supportedLocales.map((supportedLocale) => (
          <DropdownMenuItem
            key={supportedLocale.code}
            onClick={(e) => setLang(supportedLocale.code)}
            className={`flex items-center gap-2 ${lang === supportedLocale.code ? "bg-accent" : ""}`}
          >
            <span>{supportedLocale.flag}</span>
            <span>{supportedLocale.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
