"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "../ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="motto" className="py-20">
      {/* Title yang di tengah */}
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-center sm:text-7xl text-ternary-dark dark:text-ternary-light">
        Motto
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Quotes di tengah */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="text-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
