import React from "react";
import { motion } from "framer-motion";

export function LaptopLogo() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={500}
      height={500}
      viewBox="0 0 500 500"
      fill="none"
    >
      {/* Laptop Screen */}
      <motion.rect
        x="100"
        y="50"
        width="300"
        height="200"
        fill="none"
        stroke="#87CEEB"
        strokeWidth={2}
        rx={20}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3, 
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Laptop Base */}
      <motion.rect
        x="100"
        y="260"
        width="300"
        height="30"
        fill="none"
        stroke="#87CEEB"
        strokeWidth={2}
        rx={10}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5,
        }}
      />
    </motion.svg>
  );
}
