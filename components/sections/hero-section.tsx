"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

import { BackgroundBeams } from "../background-beams";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-20 md:py-32 w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <BackgroundBeams />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            {t("hero.badge")}
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {t("hero.title")
              .split(" ")
              .map((word, index) => {
                if (word === "Generating") {
                  return (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      {word}{" "}
                    </span>
                  );
                }
                return word + " ";
              })}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/signup">
              <ShinyButton className="px-6 py-4 text-lg">
                <span className="flex items-center justify-center">
                  {t("hero.cta.primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </ShinyButton>
            </Link>
            <Link href="/docs">
              <RainbowButton className="px-6 py-4 text-lg bg-white h-[3.2rem] rounded-md">
                <span>{t("hero.cta.secondary")}</span>
              </RainbowButton>
            </Link>
          </div> */}

          <div className="relative mt-10">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="/cover.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
