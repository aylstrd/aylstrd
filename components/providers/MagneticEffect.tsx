"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface ZoomEffectProps {
  children: React.ReactNode
}

export default function ZoomEffect({ children }: ZoomEffectProps) {
  const [scale, setScale] = useState(1)

  const handleMouseEnter = () => {
    setScale(1.2) // Membesar saat kursor masuk
  }

  const handleMouseLeave = () => {
    setScale(1) // Kembali ke ukuran semula saat kursor keluar
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ scale }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  )
}
