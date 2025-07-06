"use client";

import { ReactNode, useEffect, useState } from "react";
import { LingoProvider } from "lingo.dev/react/client";
import { loadDictionary } from "lingo.dev/react/client";

import { useLang } from "@/components/i18n/lingo-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import LenisProvider from "@/lib/providers/LenisProvider";

export default function LingoWrapper({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    loadDictionary(lang).then(setDictionary);
  }, [lang]);

  if (!dictionary) return null; // or a loading UI

  return (
    <LingoProvider dictionary={dictionary}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthProvider>
          <LenisProvider>
            {children}
            <Toaster />
          </LenisProvider>
        </AuthProvider>
      </ThemeProvider>
    </LingoProvider>
  );
}
