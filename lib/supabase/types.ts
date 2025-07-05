export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      plans: {
        Row: {
          id: string
          name: string
          price_monthly: number
          credits_monthly: number
          features: any
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          price_monthly: number
          credits_monthly: number
          features?: any
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          price_monthly?: number
          credits_monthly?: number
          features?: any
          is_active?: boolean
          created_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          plan_id: string
          stripe_subscription_id: string | null
          status: string
          current_period_start: string | null
          current_period_end: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_id: string
          stripe_subscription_id?: string | null
          status?: string
          current_period_start?: string | null
          current_period_end?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan_id?: string
          stripe_subscription_id?: string | null
          status?: string
          current_period_start?: string | null
          current_period_end?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      usage_credits: {
        Row: {
          id: string
          user_id: string
          credits_used: number
          credits_remaining: number
          period_start: string
          period_end: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          credits_used?: number
          credits_remaining?: number
          period_start?: string
          period_end?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          credits_used?: number
          credits_remaining?: number
          period_start?: string
          period_end?: string
          created_at?: string
          updated_at?: string
        }
      }
      documentation_generations: {
        Row: {
          id: string
          user_id: string
          project_name: string
          files_processed: number
          credits_consumed: number
          status: string
          output_format: string
          generation_time: number | null
          error_message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          project_name: string
          files_processed?: number
          credits_consumed?: number
          status?: string
          output_format?: string
          generation_time?: number | null
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          project_name?: string
          files_processed?: number
          credits_consumed?: number
          status?: string
          output_format?: string
          generation_time?: number | null
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_settings: {
        Row: {
          id: string
          user_id: string
          email_notifications: any
          default_output_format: string
          api_key_encrypted: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          email_notifications?: any
          default_output_format?: string
          api_key_encrypted?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          email_notifications?: any
          default_output_format?: string
          api_key_encrypted?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
