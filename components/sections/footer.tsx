import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../logo";

export function Footer() {
  return (
    <footer className="border-t bg-background w-full">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          {/* Brand */}
          <div className="flex items-start space-x-2  md:mb-0 flex-col">
            <Logo />

            <p className="text-sm text-muted-foreground max-w-md mt-6">
              AI-powered CLI tool that generates comprehensive documentation
              from your codebase.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/leen-neel/zen-doc-cli">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://twitter.com/zendoc">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZenDoc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Made with ❤️ for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
