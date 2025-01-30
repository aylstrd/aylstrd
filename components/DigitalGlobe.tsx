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
        "max-md h-32 w-32 overflow-hidden rounded-lg bg-zinc-200",
        className
      )}
      ref={el}
    >
      <div className="fence">
        <div className="fence-wrap">
          {/* Garis-garis dengan warna yang berubah sesuai tema */}
          <div className="border-black fence-bar vertical dark:border-white"></div>
          <div className="border-black fence-bar vertical dark:border-white"></div>
          <div className="border-black fence-bar vertical dark:border-white"></div>
          <div className="border-black fence-bar horizontal dark:border-white"></div>
          <div className="border-black fence-bar horizontal-middle dark:border-white"></div>
        </div>
      </div>
    </div>
  )
}
