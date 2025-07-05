import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { UsageChart } from "@/components/usage-chart"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"
import { ProtectedRoute } from "@/components/protected-route"
import { UserDataProvider } from "@/components/user-data-provider"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <UserDataProvider>
        <DashboardLayout>
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's an overview of your ZenDoc usage.</p>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <UsageChart />
              <RecentActivity />
            </div>

            <QuickActions />
          </div>
        </DashboardLayout>
      </UserDataProvider>
    </ProtectedRoute>
  )
}
