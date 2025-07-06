import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Terminal, Users, Zap } from "lucide-react";
import Link from "next/link";
import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  { icon: Terminal, value: 10000, label: "CLI Downloads" },
  { icon: Users, value: 500, label: "Happy Developers" },
  { icon: Zap, value: 1000000, label: "Files Processed" },
];

export function CTASection() {

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-12 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_70%)]" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to transform your{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  documentation workflow?
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have already streamlined their documentation process with ZenDoc. Start
                generating beautiful docs in minutes.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {stats.map((stat, index) => {
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold flex items-center justify-center">
                        <NumberTicker
                          value={stat.value}
                          className="whitespace-pre-wrap text-2xl font-bold tracking-tighter text-black dark:text-white"
                        />
                        <span className="ml-1">+</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent">
                    View Documentation
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • Free tier available • Cancel anytime
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}