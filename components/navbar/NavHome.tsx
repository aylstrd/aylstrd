"use client"

import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import gsap from "gsap"
import { Code2 } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import NavItem from "../Language/NavItem"


export default function NavHome() {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })
      tl.to(el.current, { x: 0, duration: 2, ease: "power4.inOut" }, 0)
    }, el)
  }, [])

  return (
    <div
      ref={el}
      className="pointer-events-auto absolute left-[2.5%] top-5 translate-x-[calc(-15rem-2.5vw)] md:top-4"
    >
      <div className="pb-1 overflow-hidden">
        <Link href="/" className="inline-flex items-center group gap-x-2">
          <p className="font-semibold uppercase text-md">DAL</p>
        </Link>
      </div>
    </div>
  )
}
