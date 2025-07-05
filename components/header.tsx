"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { Menu, X, Terminal } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Terminal className="h-6 w-6" />
          <span className="font-bold text-xl">ZenDoc</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
            {t("navigation.features")}
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            {t("navigation.documentation")}
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            {t("navigation.pricing")}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <ModeToggle />
          <Link href="/auth/signin">
            <Button variant="ghost" size="sm">
              {t("navigation.signIn")}
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button size="sm">{t("navigation.signUp")}</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <ModeToggle />
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link href="/features" className="block text-sm font-medium hover:text-primary transition-colors">
              {t("navigation.features")}
            </Link>
            <Link href="/docs" className="block text-sm font-medium hover:text-primary transition-colors">
              {t("navigation.documentation")}
            </Link>
            <Link href="/pricing" className="block text-sm font-medium hover:text-primary transition-colors">
              {t("navigation.pricing")}
            </Link>
            <div className="flex space-x-2 pt-4">
              <Link href="/auth/signin" className="flex-1">
                <Button variant="ghost" size="sm" className="w-full">
                  {t("navigation.signIn")}
                </Button>
              </Link>
              <Link href="/auth/signup" className="flex-1">
                <Button size="sm" className="w-full">
                  {t("navigation.signUp")}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
