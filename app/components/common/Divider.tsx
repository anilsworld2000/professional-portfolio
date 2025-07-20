'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

type DividerProps = {
  label?: string
  icon?: boolean
}

export default function Divider({ label, icon = true }: DividerProps) {
  return (
    <motion.div
      className="my-12 flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="separator"
      aria-hidden={!label}
    >
      <hr className="w-full max-w-xs border-t border-gray-300" />
      {(label || icon) && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          {label && <span className="uppercase tracking-wide">{label}</span>}
          {icon && <FaChevronDown className="animate-bounce mt-0.5" />}
        </div>
      )}
    </motion.div>
  )
}
