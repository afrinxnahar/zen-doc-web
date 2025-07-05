import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET!,
  database: new Pool({
    connectionString: process.env.DATABASE_URL!,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignInAfterVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
  callbacks: {
    async signUp({ user }: { user: User }) {
      console.log("New user signed up:", user);
      const client = await import("@/lib/supabase/server").then((m) => m.createClient());

      await client.from("users").insert({
        id: user.id,
        email: user.email,
        full_name: user.name,
        avatar_url: user.image,
      });

      // Create initial usage credits (Free plan)
      await client.from("usage_credits").insert({
        user_id: user.id,
        credits_remaining: 100,
        credits_used: 0,
      });

      await client.from("user_settings").insert({
        user_id: user.id,
      });

      return user;
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;