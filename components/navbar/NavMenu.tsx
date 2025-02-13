"use client"

import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import ThemeSwitcher from "../ThemeSwitcher"
import MagneticEffect from "../providers/MagneticEffect"
import NavMenuBtn from "./NavMenuBtn"
import NavMenuLine from "./NavMenuLine"
import NavMenuLink from "./NavMenuLink"
import NavMenuSocial from "./NavMenuSocial"
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function NavMenu() {
  const [active, setActive] = useState<boolean>(false)
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const menuBgRef = useRef<HTMLDivElement | null>(null)

  const toggleHamburger = (status: boolean) => {
    setActive(status)
  }

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const locomotivescroll = new locomotiveModule.default()
      setScroll(locomotivescroll)
    })
  }, [])

  useIsomorphicLayoutEffect(() => {
    gsap.context(() => {
      if (active) {
        gsap.to(menuRef.current, { x: 0, duration: 0.8, ease: "power3.inOut" })
        gsap.to(".nav-rounded", {
          scaleX: 0,
          duration: 0.8,
          ease: "power3.inOut",
        })
        gsap.to(menuBgRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power3.inOut",
        })
      } else {
        gsap.to(menuRef.current, {
          x: "140%",
          duration: 0.8,
          ease: "power3.inOut",
        })
        gsap.to(".nav-rounded", {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.inOut",
        })
        gsap.to(menuBgRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        })
      }
    }, menuRef)
  }, [active])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActive(false)
    }
  }

  const handleScroll = (id: string) => {
    scroll && scroll.scrollTo(id, { duration: 2 })
    setActive(false)
  }

  return (
    <>
      <div
        ref={menuBgRef}
        className={cn(
          "nav-menu-bg absolute left-0 top-0 h-screen w-full bg-gradient-to-r from-black/[.13] via-black/[.16] to-black/[.35] opacity-0 text-white",
          active ? "pointer-events-auto" : "pointer-events-none"
        )}
        onClick={() => setActive(false)}
        onKeyDown={() => handleKeyDown}
      ></div>
      <div
        ref={menuRef}
        className={cn(
          "nav-menu pointer-events-auto absolute right-0 top-0 flex h-full w-full max-w-lg translate-x-[150%] flex-col justify-between bg-[#241c34]  pb-12 pt-[clamp(3.5rem,10vh,5rem)] text-5xl text-white will-change-transform [-webkit-perspective:1000]"
        )}
      >
        <div className="nav-rounded absolute left-0 top-[-10%] z-[-1] h-[120%] w-[80%] -translate-x-1/2 rounded-[100%_100%] bg-[#241c34] will-change-transform [-webkit-perspective:1000] text-white"></div>

        {/* Bagian Atas Menu */}
        <div>
          <NavMenuLine title={"Navigation"} />
        </div>

        {/* Daftar Menu Links */}
        <div>
          <MagneticEffect>
            <NavMenuLink
              title={"Home"}
              active={active}
              duration={1}
              handleScroll={() => handleScroll("#hero")}
            />
          </MagneticEffect>
          <MagneticEffect>
            <NavMenuLink
              title={"About"}
              active={active}
              duration={1}
              handleScroll={() => handleScroll("#about")}
            />
          </MagneticEffect>
          <MagneticEffect>
            <NavMenuLink
              title={"Projects"}
              active={active}
              duration={1.2}
              handleScroll={() => handleScroll("#projects")}
            />
          </MagneticEffect>
          <MagneticEffect>
            <NavMenuLink
              title={"Experience"}
              active={active}
              duration={1.2}
              handleScroll={() => handleScroll("#experience")}
            />
          </MagneticEffect>
          <MagneticEffect>
            <NavMenuLink
              title={"Skills"}
              active={active}
              duration={1.2}
              handleScroll={() => handleScroll("#skills")}
            />
          </MagneticEffect>
          <MagneticEffect>
            <NavMenuLink
              title={"Motto"}
              active={active}
              duration={1.2}
              handleScroll={() => handleScroll("#motto")}
            />
          </MagneticEffect>
          <MagneticEffect>
            <NavMenuLink
              title={"Certification"}
              active={active}
              duration={1.2}
              handleScroll={() => handleScroll("#certification")}
            />
          </MagneticEffect>
          <MagneticEffect>
            <NavMenuLink
              title={"Contact"}
              active={active}
              duration={1.3}
              handleScroll={() => handleScroll("#contact")}
            />
          </MagneticEffect>
        </div>

        {/* Bagian Links */}
        <div>
          <NavMenuLine title={"Links"} />
          <div className="flex gap-x-2 px-[clamp(1.25rem,3vw,2.5rem)] text-base text-white">
            <MagneticEffect>
              <NavMenuSocial
                title={<FaLinkedin size={24} color="#0077B5" />}
                active={active}
                classes="pr-6"
                duration={1.2}
                link="https://linkedin.com/in/dewiayulestari27"
              />
            </MagneticEffect>
            <MagneticEffect>
              <NavMenuSocial
                title={<FaEnvelope size={24} color="#D44638" />}
                active={active}
                classes="pr-6"
                duration={1.8}
                link="mailto:dewiayulestari378@gmail.com"
              />
            </MagneticEffect>
            <MagneticEffect>
              <NavMenuSocial
                title={<FaGithub size={24} className="text-white title-black-300 title-white" />}
                active={active}
                classes="pr-6"
                duration={1}
                link="https://github.com/Dewiayu01"
              />
            </MagneticEffect>
          </div>
          <div className="flex px-[clamp(1.25rem,3vw,2.5rem)]">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <NavMenuBtn active={active} toggleHamburger={toggleHamburger} />
    </>
  )
}
