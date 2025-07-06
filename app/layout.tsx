import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { LangProvider } from "@/components/i18n/lingo-provider";
import { LingoProviderWrapper } from "lingo.dev/react-client";
import LingoWrapper from "@/components/i18n/lingoWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zen Doc - AI-Powered Documentation Generator",
  description:
    "Generate beautiful documentation from any codebase using Google Gemini AI — all with one command.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LangProvider>
          <LingoWrapper >{children}</LingoWrapper>
        </LangProvider>
      </body>
    </html>
  );
}
