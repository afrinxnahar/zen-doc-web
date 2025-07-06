/** @type {import('next').NextConfig} */
import lingoCompiler from "lingo.dev/compiler";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default lingoCompiler.next({
  sourceLocale: "en", // Source language (English)
  targetLocales: ["es", "fr", "de", "ja"], // Target languages
  sourceRoot: "app", // App Router directory
  lingoDir: "lingo", // Translation files directory
  rsc: true, // Support React Server Components
  debug: false, // Set to true for debugging
  models: {
    "*:*": "google:gemini-2.0-flash", // AI model for translations
  },
})(nextConfig);
