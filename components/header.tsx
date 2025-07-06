"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { Menu, X, Terminal } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import Image from "next/image"
import logo from "@/public/logo.png"
import { useLenis } from "@/lib/providers/LenisProvider"
import { ShinyButton } from "@/components/magicui/shiny-button";
import { RainbowButton } from "./magicui/rainbow-button"
import { ShimmerButton } from "./magicui/shimmer-button"


export function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lenis = useLenis();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (lenis) {
      console.log("Lenis is ready, performing smooth scroll to:", targetId);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80; // Adjust for header height (e.g., 80px)
        lenis.scrollTo(offsetTop, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    } else {
      // Fallback for when Lenis isn't ready
      e.currentTarget.href && (window.location.href = e.currentTarget.href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Zen Doc" width={44} height={44} />
          <span className="font-bold text-xl">Zen Doc</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors" onClick={(e) => handleSmoothScroll(e, "features")}>
            {t("navigation.features")}
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors" onClick={(e) => handleSmoothScroll(e, "pricing")}>
            {t("navigation.pricing")}
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link href="/auth/signin">
            <RainbowButton className="rounded-md">
              {t("navigation.signIn")}
            </RainbowButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link href="#features" className="block text-sm font-medium hover:text-primary transition-colors" onClick={(e) => handleSmoothScroll(e, "features")}>
              {t("navigation.features")}
            </Link>
            <Link href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleSmoothScroll(e, "pricing")}>
              {t("navigation.pricing")}
            </Link>
            <Link href="/docs" className="block text-sm font-medium hover:text-primary transition-colors">
              Docs
            </Link>

            <div className="flex space-x-2 pt-4">
              <Link href="/auth/signin" className="flex-1">
                <RainbowButton className="rounded-md" >
                  {t("navigation.signIn")}
                </RainbowButton>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
