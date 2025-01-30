"use client";

import { useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect";
import { cn } from "@/lib/utils";
import MagneticEffect from "../providers/MagneticEffect";
import useTranslation from "@/hooks/useTranslation";

interface NavMenuBtnProps {
  active: boolean;
  toggleHamburger: (status: boolean) => void;
}

export default function NavMenuBtn({
  active,
  toggleHamburger,
}: NavMenuBtnProps) {
  const el = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Mengambil nilai terjemahan dan pengaturan bahasa
  const { t, lang, setLanguage } = useTranslation("common");

  useIsomorphicLayoutEffect(() => {
    if (!el.current) return console.log("el.current is null");
    const context = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.to(el.current, { x: 0, duration: 2, ease: "power4.inOut" }, 0);
    }, el);

    return () => context.kill();
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "id" ? "en" : "id";
    setLanguage(newLang);

    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      ref={el}
      className="pointer-events-auto absolute right-[2.5%] top-4 z-[51] flex items-center gap-4 translate-x-[calc(5rem+2.5vw)]"
    >
      {/* Tombol Bendera */}
      <button
        onClick={toggleLanguage}
        className="transition-transform duration-200 hover:scale-110"
        aria-label="Toggle Language"
      >
        {lang === "id" ? (
          <span role="img" aria-label="Indonesia Flag" className="text-2xl">
            🇮🇩
          </span>
        ) : (
          <span role="img" aria-label="UK Flag" className="text-2xl">
            🇬🇧
          </span>
        )}
      </button>

      {/* Tombol Hamburger */}
      <MagneticEffect>
        <button tabIndex={0} onClick={() => toggleHamburger(!active)}>
          <div
            className={cn(
              "relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full bg-zinc-800 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 dark:bg-zinc-200",
              { "ring-4": active }
            )}
          >
            <div
              className={cn(
                "flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300",
                { "-rotate-[45deg]": active }
              )}
            >
              <div
                className={cn(
                  "h-[2px] w-1/2 origin-right transform rounded bg-zinc-200 transition-all delay-75 duration-300 dark:bg-zinc-800",
                  { "h-[1px] -translate-y-[1px] -rotate-90": active }
                )}
              ></div>
              <div className="h-[1px] rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div
                className={cn(
                  "h-[2px] w-1/2 origin-left transform self-end rounded bg-zinc-200 transition-all delay-75 duration-300 dark:bg-zinc-800 ",
                  { "h-[1px] translate-y-[1px] -rotate-90": active }
                )}
              ></div>
            </div>
          </div>
        </button>
      </MagneticEffect>
    </div>
  );
}
