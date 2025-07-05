"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Github, Mail, Eye, EyeOff, Loader2 } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { signIn, signUp } from "@/lib/auth/client"

interface AuthFormProps {
  mode: "signin" | "signup"
}

export function AuthForm({ mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  })
  const router = useRouter()
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (mode === "signup") {
        if (formData.password !== formData.confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords do not match",
            variant: "destructive",
          })
          return
        }

        const { data, error } = await signUp.email({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        })

        if (error) {
          console.log("Sign Up Error:", error)
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          })
          return
        }

        toast({
          title: "Success",
          description: "Account created! Please check your email to verify your account.",
        })

        router.push("/auth/verify-email")
      } else {
        const { data, error } = await signIn.email({
          email: formData.email,
          password: formData.password,
        })

        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          })
          return
        }

        toast({
          title: "Success",
          description: "Welcome back!",
        })

        router.push("/dashboard")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    try {
      setIsLoading(true)

      if (provider === "google") {
        await signIn.social({
          provider: "google",
          callbackURL: "/dashboard",
        })
      } else {
        await signIn.social({
          provider: "github",
          callbackURL: "/dashboard",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to sign in with ${provider}`,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* OAuth Buttons */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => handleOAuthSignIn("google")}
          disabled={isLoading}
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => handleOAuthSignIn("github")}
          disabled={isLoading}
        >
          <Github className="mr-2 h-4 w-4" />
          Continue with GitHub
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
        </div>
      </div>

      {/* Email/Password Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {mode === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center">
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              {mode === "signin" ? "Signing in..." : "Creating account..."}
            </div>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              {mode === "signin" ? "Sign in with Email" : "Create Account"}
            </>
          )}
        </Button>
      </form>

      {mode === "signin" && (
        <div className="text-center">
          <Button variant="link" className="text-sm">
            Forgot your password?
          </Button>
        </div>
      )}

      {mode === "signup" && (
        <p className="text-xs text-muted-foreground text-center">
          By creating an account, you agree to our{" "}
          <Button variant="link" className="p-0 h-auto text-xs">
            Terms of Service
          </Button>{" "}
          and{" "}
          <Button variant="link" className="p-0 h-auto text-xs">
            Privacy Policy
          </Button>
        </p>
      )}
    </div>
  )
}
