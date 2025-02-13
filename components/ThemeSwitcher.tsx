"use client"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { MoonIcon, SunIcon } from "lucide-react"

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (theme === "dark") {
      document.body.classList.add("dark")
      document.body.classList.remove("bg-blue-dark") 
    } else if (theme === "blue") {
      document.body.classList.add("bg-blue-dark")
      document.body.classList.remove("dark")
    } else {
      document.body.classList.remove("bg-blue-dark")
      document.body.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    function createStars() {
      const starsContainer = document.getElementById("stars")
      if (starsContainer) {
        starsContainer.innerHTML = "" // Clear previous stars
        for (let i = 0; i < 100; i++) {
          const star = document.createElement("div")
          star.classList.add("star")
          star.style.left = `${Math.random() * 100}vw`
          star.style.top = `${Math.random() * 100}vh`
          star.style.animationDuration = `${Math.random() * 5 + 5}s` // Randomize speed
          starsContainer.appendChild(star)
        }
      }
    }

    createStars()
  }, [])

  if (!mounted) return null

  return (
    <>
      <div id="stars"></div>
      <Tabs defaultValue={theme}>
        <TabsList className="text-white border border-zinc-600 bg-zinc-800">
          <TabsTrigger value="light" onClick={() => setTheme("light")} className="text-white">
            <SunIcon className="w-4 h-4" />
          </TabsTrigger>
          <TabsTrigger value="dark" onClick={() => setTheme("dark")} className="text-white">
            <MoonIcon className="w-4 h-4 transition-all rotate-90 dark:rotate-0" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}

export default ThemeSwitcher
