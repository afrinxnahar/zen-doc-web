"use client"

import type React from "react"
import { useSession } from "@/lib/auth/client"
import { createContext, useContext } from "react"

interface AuthContextType {
  user: any | null
  session: any | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, isPending: isLoading } = useSession()

  return (
    <AuthContext.Provider
      value={{
        user: session?.user || null,
        session: session || null,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
