import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import MagneticEffect from "../providers/MagneticEffect"
import ContactLink from "./ContactLink"
import ContactTitle from "./ContactTitle"
import ContactForm from "./ContactForm"
import ContactRounded from "./ContactRounded"

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative z-[0] mt-24 flex min-h-screen w-full flex-col items-center justify-center overflow-x-clip bg-[#241c34 bg-zinc-100"
    >
      <ContactRounded />
      <div className="w-full overflow-hidden px-[5%]">
        <div className=" text-white contact-content relative flex min-h-[100svh] w-full flex-col items-center justify-between pt-12">
          <ContactTitle title="Contact" />
          <ContactForm />
          <div className="flex justify-between w-full py-12">
            <div>
           
            </div>
            <div className="flex flex-col items-end">
              <p className="mb-4 text-xl font-semibold text-zinc-800">
                Links
              </p>
             
              <div className="flex items-center gap-x-2">
              <Link
                href="https://github.com/Dewiayu01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Link"
              >
                <MagneticEffect>
                  <GithubIcon className="w-8 h-8 text-zinc-800" />
                </MagneticEffect>
              </Link>
                <ContactLink
                  href="mailto:dewiayulestari378@gmail.com"
                  label="Email"
                  icon={
                    <MailIcon className="text-zinc-800" />
                  }
                />
                <ContactLink
                  href="https://linkedin.com/in/dewiayulestari27"
                  label="LinkedIn"
                  icon={
                    <LinkedinIcon className="text-zinc-800" />
                  }
                />
              </div>
            </div>
          </div>
            {/* Copyright Section */}
            <div className="w-full py-4 text-center text-zinc-800">
            <p>&copy; {new Date().getFullYear()} ayude. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
