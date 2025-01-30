import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {
  directionLeft?: boolean;
  name: string;
  images: string;
  position: "top" | "bottom" | "left" | "right";
};

function Skill({ directionLeft = true, name, images, position }: Props) {
  const [textPosition, setTextPosition] = useState({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  useEffect(() => {
    // Atur posisi teks berdasarkan posisi yang diberikan
    switch (position) {
      case "top":
        setTextPosition({
          top: "-70%", // Geser lebih ke atas
          left: "-90%", // Tetap di tengah horizontal
          transform: "translate(-50%, -50%)",
        });
        break;
      case "bottom":
        setTextPosition({
          top: "20%", // Geser lebih ke bawah
          left: "90%", // Tetap di tengah horizontal
          transform: "translate(-50%, -50%)",
        });
        break;
      case "left":
        setTextPosition({
          top: "180%", // Tetap di tengah vertikal
          left: "-130%", // Geser lebih ke kiri
          transform: "translate(-50%, -50%)",
        });
        break;
      case "right":
        setTextPosition({
          top: "180%", // Tetap di tengah vertikal
          left: "130%", // Geser lebih ke kanan
          transform: "translate(-50%, -50%)",
        });
        break;
      default:
        setTextPosition({
          top: "180%",
          left: "80%",
          transform: "translate(-60%, -80%)",
        });
        break;
    }
  }, [position]);

  return (
    <div className="relative flex items-center justify-center cursor-pointer group">
      {/* Gambar */}
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={images || "/images"} // Fallback jika `images` kosong
        alt={name}
        className="object-cover w-24 h-24 transition duration-300 ease-in-out xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale"
      />

      {/* Teks besar di luar div gambar */}
      <div
        className="absolute z-10 text-5xl font-bold transition duration-300 ease-in-out opacity-0 light:text-black dark:text-white group-hover:opacity-100"
        style={textPosition}
      >
        {name}
      </div>
    </div>
  );
}

export default Skill;
