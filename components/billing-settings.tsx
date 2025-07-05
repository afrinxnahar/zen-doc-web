"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Download, Crown } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    credits: 100,
    features: ["100 credits/month", "Basic documentation", "Community support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "month",
    credits: 1000,
    features: ["1,000 credits/month", "Advanced templates", "Priority support", "Custom themes"],
    current: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "month",
    credits: 5000,
    features: ["5,000 credits/month", "Team collaboration", "Advanced analytics", "Custom integrations"],
    current: false,
  },
]

export function BillingSettings() {
  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Crown className="h-5 w-5" />
            <span>Current Plan</span>
          </CardTitle>
          <CardDescription>You're currently on the Pro plan.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Pro Plan</h3>
              <p className="text-muted-foreground">$19/month • 1,000 credits</p>
            </div>
            <Badge>Current Plan</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Credits Used</span>
              <span>247 / 1,000</span>
            </div>
            <Progress value={24.7} className="h-2" />
            <p className="text-xs text-muted-foreground">753 credits remaining this month</p>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline">Change Plan</Button>
            <Button variant="outline">Cancel Subscription</Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Available Plans</CardTitle>
          <CardDescription>Choose the plan that best fits your needs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 border rounded-lg ${plan.current ? "border-primary bg-primary/5" : "border-muted"}`}
              >
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={plan.current ? "secondary" : "default"} disabled={plan.current}>
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Payment Method</span>
          </CardTitle>
          <CardDescription>Manage your payment methods and billing information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                <CreditCard className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/25</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>

          <Button variant="outline">
            <CreditCard className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Billing History</span>
          </CardTitle>
          <CardDescription>Download your invoices and view payment history.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "Dec 1, 2024", amount: "$19.00", status: "Paid", invoice: "INV-001" },
              { date: "Nov 1, 2024", amount: "$19.00", status: "Paid", invoice: "INV-002" },
              { date: "Oct 1, 2024", amount: "$19.00", status: "Paid", invoice: "INV-003" },
            ].map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{invoice.invoice}</p>
                  <p className="text-sm text-muted-foreground">{invoice.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{invoice.amount}</p>
                    <Badge variant="secondary" className="text-xs">
                      {invoice.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
