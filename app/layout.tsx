import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "DAL | %s",
    default: "DAL | Frontend Developer",
  },
  description:
    "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
  metadataBase: new URL("https://ayude.vercel.app"),
  openGraph: {
    title: {
      template: "DAL | %s",
      default: "DAL | Frontend Developer",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    url: "https://ayude.vercel.app",
    siteName: "DAL",
    images: [
      {
        url: "/public/images/dedew.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Dewi Ayu Lestari",
    "Ayu",
    "DAL",
    "frontend web developer",
    "frontend developer",
    "frontend engineer",
    "react",
    "nextjs",
    "creative",
    "creative developer",
    "creative frontend developer",
    "web developer",
    "web engineer",
    "tech",
    "indonesia",
    "indonesian",
    "indonesian developer",
    "indonesian web developer",
    "indonesian frontend developer",
    "indonesian web engineer",
    "indonesian frontend engineer",
    "indonesian creative developer",
    "portfolio",
    "portfolio website",
    "portfolio web",
    "portfolio web developer",
    "portfolio frontend developer",
    "portfolio web engineer",
  ],
  twitter: {
    card: "summary_large_image",
    title: {
      template: "DAL | %s",
      default: "DAL",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    creator: "@ayude",
    images: [
      {
        url: "/public/images/dedew.jpg",
        width: 2000,
        height: 2200,
      },
    ],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-zinc-50 text-zinc-800 antialiased dark:bg-neutral-900 dark:text-zinc-50",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
          >
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
