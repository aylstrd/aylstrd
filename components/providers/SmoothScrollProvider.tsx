"use client"

import { createContext, useEffect, useState } from "react"

export const SmoothScrollContext = createContext({
  scroll: null as LocomotiveScroll | null,
})

interface SmoothScrollProviderProps {
  children: React.ReactNode
  options?: any
}

export const SmoothScrollProvider = ({
  children,
  options,
}: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)

  useEffect(() => {
    // Ensure this effect only runs in the client-side environment
    if (typeof window !== "undefined") {
      const scrollContainer = document.querySelector("[data-scroll-container]")

      // Only initialize LocomotiveScroll if the element exists
      if (scrollContainer) {
        (async () => {
          try {
            const LocomotiveScroll = (await import("locomotive-scroll")).default

            const scrollInstance = new LocomotiveScroll({
              el: scrollContainer,
              ...options,
            })

            setScroll(scrollInstance)
          } catch (error) {
            console.error(`[SmoothScrollProvider]: ${error}`)
          }
        })()
      }
    }

    // Clean up: Destroy the scroll instance on unmount
    return () => {
      if (scroll) {
        scroll.destroy()
      }
    }
  }, [options, scroll])

  return (
    <SmoothScrollContext.Provider
      value={{
        scroll,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  )
}
