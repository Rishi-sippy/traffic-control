'use client'

import { motion } from 'framer-motion'

export default function MotionCard({ children }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="
        relative
        bg-[#0f0f0f]
        rounded-[28px]
        p-6
        border border-[#1c1c1c]
        shadow-[0_0_30px_rgba(34,197,94,0.08)]
        hover:shadow-[0_0_60px_rgba(34,197,94,0.25)]
        transition-all
      "
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-green-400/5 to-yellow-400/5 opacity-0 hover:opacity-100 transition"></div>

      {children}
    </motion.div>
  )
}
