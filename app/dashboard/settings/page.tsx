import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsTabs } from "@/components/settings-tabs"
import { ProtectedRoute } from "@/components/protected-route"
import { UserDataProvider } from "@/components/user-data-provider"

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <UserDataProvider>
        <DashboardLayout>
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>

            <SettingsTabs />
          </div>
        </DashboardLayout>
      </UserDataProvider>
    </ProtectedRoute>
  )
}
