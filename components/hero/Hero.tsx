"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
   <h1 className="mb-4 font-extrabold">
  <span className="text-5xl text-white sm:text-5xl lg:text-5xl">
    Hello, I'm Dewi Ayu Lestari
    <br />
  </span>
  <br />
  <TypeAnimation
  sequence={[
    "Web Developer",
    1000,
    "Mobile Developer",
    1000,
    "Administration",
    1000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-[12rem] sm:text-[8rem] lg:text-[6rem] text-blue-300"
/>
</h1>


          <div>
            <Link
              href="/#contact"
              className="inline-block w-full px-6 py-3 mr-4 rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-blue-600 hover:to-teal-600"
            >
              <span className="text-white">Hire Me</span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1eYYIPVwKcxD_9PslktzsQowxqvheJte3/view?usp=drive_link"
              className="inline-block w-full px-1 py-1 mt-3 rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-blue-600 hover:to-teal-600"
            >
              <span className="block text-white bg-[#0a5e77] from-blue-500 to-teal-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="circle-container">
            <Image
              src="/images/dedew.png"
              alt="hero image"
              className="hero-image"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
