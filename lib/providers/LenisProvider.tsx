// zen-doc-web/src/components/LenisProvider.tsx
"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname, useSearchParams } from "next/navigation";

const LenisContext = createContext<Lenis | null>(null);

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams]);

  return <LenisContext.Provider value={lenisRef.current}>{children}</LenisContext.Provider>;
}

export const useLenis = () => useContext(LenisContext);