"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountSettings } from "@/components/account-settings"
import { BillingSettings } from "@/components/billing-settings"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="account" className="space-y-6">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <AccountSettings />
      </TabsContent>

      <TabsContent value="billing">
        <BillingSettings />
      </TabsContent>
    </Tabs>
  )
}
