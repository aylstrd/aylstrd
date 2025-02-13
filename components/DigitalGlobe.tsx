"use client"

import { cn } from "@/lib/utils"
import { useIsomorphicLayoutEffect } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

interface DigitalGlobeProps {
  className?: string
}

export default function DigitalGlobe({ className }: DigitalGlobeProps) {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.timeline({
      scrollTrigger: {
        trigger: el.current,
        start: "100% 100%",
        end: "100% 0%",
        scrub: 0,
      },
    })

    ctx.to(el.current, {
      ease: "none",
      rotate: 360,
    })
  }, [])

  return (
    <div
      className={cn(
        "relative max-md h-32 w-32 overflow-hidden rounded-lg bg-white ring-4 ring-gray-700",
        className
      )}
      ref={el}
    >
      <div className="relative w-full h-full fence">
        <div className="absolute w-full h-full fence-wrap">
          {/* Garis-garis dengan warna yang berubah sesuai tema */}
          <div className="border-2 border-gray-700 fence-bar vertical"></div>
          <div className="border-2 border-gray-700 fence-bar vertical"></div>
          <div className="border-2 border-gray-700 fence-bar vertical"></div>
          <div className="border-2 border-gray-700 fence-bar horizontal"></div>
          <div className="border-2 border-gray-700 fence-bar horizontal-middle"></div>
        </div>
      </div>
    </div>
  )
}
