import React from "react"
import { Separator } from "../ui/separator"

interface NavMenuLineProps {
  title: string
}

export default function NavMenuLine({ title }: NavMenuLineProps) {
  return (
    <div className="px-[clamp(1.25rem,3vw,2.5rem)]">
      <span className="text-xl font-semibold text-white-800">
        {title}
      </span>
      <Separator className="mt-2 mb-2 border-t border-white/25" />
    </div>
  )
}
