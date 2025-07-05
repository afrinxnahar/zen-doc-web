"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "@/components/auth-provider"
import { createClient } from "@/lib/supabase/client"
import type { Database } from "@/lib/supabase/types"

type UserProfile = Database["public"]["Tables"]["users"]["Row"]
type UsageCredits = Database["public"]["Tables"]["usage_credits"]["Row"]
type UserSettings = Database["public"]["Tables"]["user_settings"]["Row"]

interface UserDataContextType {
  profile: UserProfile | null
  credits: UsageCredits | null
  settings: UserSettings | null
  isLoading: boolean
  refreshData: () => Promise<void>
}

const UserDataContext = createContext<UserDataContextType>({
  profile: null,
  credits: null,
  settings: null,
  isLoading: true,
  refreshData: async () => {},
})

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [credits, setCredits] = useState<UsageCredits | null>(null)
  const [settings, setSettings] = useState<UserSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const supabase = createClient()

  const fetchUserData = async () => {
    if (!user?.id) {
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)

      // Fetch user profile
      const { data: profileData } = await supabase.from("users").select("*").eq("id", user.id).single()

      // Fetch usage credits
      const { data: creditsData } = await supabase
        .from("usage_credits")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single()

      // Fetch user settings
      const { data: settingsData } = await supabase.from("user_settings").select("*").eq("user_id", user.id).single()

      setProfile(profileData)
      setCredits(creditsData)
      setSettings(settingsData)
    } catch (error) {
      console.error("Error fetching user data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [user?.id])

  return (
    <UserDataContext.Provider
      value={{
        profile,
        credits,
        settings,
        isLoading,
        refreshData: fetchUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserData = () => {
  const context = useContext(UserDataContext)
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider")
  }
  return context
}
