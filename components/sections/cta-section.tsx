import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { ScriptCopyBtn } from "../magicui/script-copy-btn";

export function CTASection() {
  const customCommandMap = {
    npm: "npx zen-doc@latest init",
    yarn: "yarn dlx zen-doc@latest init",
    pnpm: "pnpm dlx zen-doc@latest init",
    bun: "bun x zen-doc@latest init",
  };

  return (
    <section className="py-20 md:py-32 w-full">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-12 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_70%)]" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Generate Docs{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  from your codebase
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop writing documentation manually. Let AI do the heavy lifting
                while you focus on building amazing software.
              </p>

              {/* Install command */}
              <div className="max-w-md mx-auto mb-8">
                <p className="text-sm text-muted-foreground mb-3">
                  Get started in seconds
                </p>
                <div className="flex items-center justify-center rounded-md p-8 font-mono text-sm">
                  <ScriptCopyBtn
                    showMultiplePackageOptions={true}
                    codeLanguage="shell"
                    lightTheme="nord"
                    darkTheme="one-dark-pro"
                    commandMap={customCommandMap}
                  />
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Open source • Community driven • Built for developers
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
