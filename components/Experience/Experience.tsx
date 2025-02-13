import React, { useRef, useState } from "react";
import { workExperience } from "@/data";
import { Button } from "../ui/MovingBorders";

const Experience = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth / 2; // Hanya geser 1 item, tetap tampil 2 item

    let newIndex = direction === "right" ? currentIndex + 1 : currentIndex - 1;
    newIndex = Math.max(0, Math.min(newIndex, workExperience.length - 2)); // Batas geser

    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  return (
    <div id="experience" className="flex items-center justify-center w-full min-h-screen py-20">
      <div className="text-center">
        <p className="mb-2 text-4xl font-extrabold tracking-tight text-white sm:text-7xl">
          Experience
        </p>
        <br></br>
        <br></br>

        <div className="relative w-full max-w-[1300px] mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-[-80px] z-10 p-3 text-white bg-gray-800 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-gray-700"
            disabled={currentIndex === 0}
          >
            ◀
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 px-3 overflow-x-hidden scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {workExperience.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[calc(50%-12px)] scroll-snap-align-start"
              >
                <Button
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    background: "rgb(4,7,29)",
                    backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem * 0.96)`,
                  }}
                  className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center md:p-6 lg:p-12">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="w-16 lg:w-32 md:w-20"
                    />
                    <div className="lg:ms-5">
                      <h1 className="text-xl font-bold text-start md:text-2xl">
                        {card.title}
                      </h1>
                      <p className="mt-3 font-semibold text-start text-white-100">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-[-80px] z-10 p-3 text-white bg-gray-800 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-gray-700"
            disabled={currentIndex >= workExperience.length - 2}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
