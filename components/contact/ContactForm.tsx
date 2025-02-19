"use client"

import { formSubmission } from "@/actions/formAction"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Loader, Mail } from "lucide-react"
import { useRef } from "react"
import { useFormState, useFormStatus } from "react-dom"
import MagneticEffect from "../providers/MagneticEffect"
import { Button } from "../ui/button"
import ContactFormLine from "./ContactFormLine"
import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"

export default function ContactForm() {
  const el = useRef<HTMLDivElement | null>(null)
  const formEl = useRef<HTMLFormElement | null>(null)
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(formSubmission, {
    errors: {
      email: false,
      name: false,
      message: false,
      subject: false,
    },
  })

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      ".contact-content",
      { translateY: "-50%" },
      {
        translateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-section",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    )
  }, [])

  const { errors } = state

  const handleFocus = (inputId: number) => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.input-line-${inputId}`,
        { translateX: 0 },
        {
          translateX: "66%",
          duration: 1,
          ease: "power1.inOut",
        }
      )
    })

    return () => ctx.revert()
  }

  return (
    <div
      ref={el}
      className="mx-auto mb-12 flex w-full max-w-[30rem] flex-col gap-2 text-4xl"
    >
      <form
        ref={formEl}
        action={async function (formData) {
          await formAction(formData)

          if (
            errors.email === false &&
            errors.name === false &&
            errors.message === false &&
            errors.subject === false
          ) {
            formEl.current?.reset()
          }
        }}
      >
        {/* Name Field */}
        <div className="group">
          <div className="relative overflow-hidden">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              autoComplete="off"
              onFocus={() => handleFocus(1)}
              className="w-full py-5 text-xl font-bold transition-colors duration-200 ease-in-out bg-transparent outline-none peer text-zinc-800 placeholder:text-zinc-800/50"
            />
            <ContactFormLine inputId={1} hasError={errors.name} />
          </div>
          {errors.name && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a valid name
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="group">
          <div className="relative overflow-hidden">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Your email"
              onFocus={() => handleFocus(2)}
              className="w-full py-5 text-xl font-bold transition-colors duration-200 ease-in-out bg-transparent outline-none peer text-zinc-800 placeholder:text-zinc-800/50"
            />
            <ContactFormLine inputId={2} hasError={errors.email} />
          </div>
          {errors.email && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a valid email address
            </span>
          )}
        </div>

        {/* Subject Field */}
        <div className="group">
          <div className="relative overflow-hidden">
            <input
              type="text"
              name="subject"
              autoComplete="off"
              placeholder="Subject"
              onFocus={() => handleFocus(3)}
              className="w-full py-5 text-xl font-bold transition-colors duration-200 ease-in-out bg-transparent outline-none peer text-zinc-800 placeholder:text-zinc-800/50"
            />
            <ContactFormLine inputId={3} hasError={errors.subject} />
          </div>
          {errors.subject && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a valid subject
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="group">
          <div className="relative overflow-hidden">
            <textarea
              className="peer min-h-[11rem] w-full resize-none bg-transparent py-5 text-xl font-bold outline-none transition-colors duration-200 ease-in-out text-zinc-800 placeholder:text-zinc-800/50"
              placeholder="Your Message"
              name="message"
              onFocus={() => handleFocus(4)}
            />
            <ContactFormLine inputId={4} hasError={errors.message} />
          </div>
          {errors.message && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a message at least 3 characters long
            </span>
          )}
        </div>

        {/* Submit Button */}
        <Button
          aria-disabled={pending}
          variant="outline"
          size="lg"
          className="mt-6 bg-custom-bg"
        >
          <MagneticEffect>
            {pending === true ? (
              <div className="inline-flex items-center bg-custom-bg gap-x-2">
                <Loader className=" bg-custom-bg" />
                <span>Sending ...</span>
              </div>
            ) : (
              <div className="inline-flex items-center p-3 text-white rounded-md cursor-pointer gap-x-2">
                <Mail className="w-6 h-6" />
                <span>Send Message</span>
              </div>
            )}
          </MagneticEffect>
        </Button>
      </form>
    </div>
  )
}
