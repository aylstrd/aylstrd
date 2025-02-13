import { cn } from "@/lib/utils"
import { useRef } from "react"
import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import gsap from "gsap"
import { LaptopLogo } from "@/components/LogoIcon"

interface PreloadProps {
  endedLoading: boolean
}

export default function Preload({ endedLoading }: PreloadProps) {
  const counterRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const counter = counterRef.current

    if (counter) {
      gsap.to(counter, {
        innerHTML: 100,
        duration: 3,
        ease: "power1.out",
        onUpdate: () => {
          counter.innerHTML = counter.innerHTML
          counter.innerHTML = `${Math.floor(parseInt(counter.innerHTML))}%`
        },
      })
    }
  }, [endedLoading])

  return (
    <div
      className={cn(
        "flex min-h-screen w-full items-center justify-center opacity-100 transition-all duration-700 ease-in-out",
        endedLoading && "opacity-0",
        "bg-[#241c34]",
      )}
    >
      <div className="stroke">
        <LaptopLogo />
        
        <div className="font-semibold text-center text-white" ref={counterRef}>
          0%
        </div>
        <div className="flex items-center justify-center text-sm text-gray-500">
          Loading...
        </div>
        <br></br>
        <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-[#87CEEB] rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-[#87CEEB] rounded-full animate-bounce200"></div>
        <div className="w-4 h-4 bg-[#87CEEB] rounded-full animate-bounce400"></div>
      </div>
      </div>
    </div>
  )
}
