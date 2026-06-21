import { motion } from 'framer-motion'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import CopyButton from './CopyButton'

export default function PasswordDisplay({ password = '', onRegenerate }) {
  const [isVisible, setIsVisible] = useState(false)

  const displayPassword = isVisible ? password : password.replace(/./g, '•')

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card-light p-6 mb-6"
    >
      <label className="text-sm font-semibold text-slate-200 dark:text-slate-100 mb-3 block">
        Your Password
      </label>

      <div className="flex gap-3 flex-col sm:flex-row items-stretch">
        {/* Password Display */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-900/50 border-2 border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 font-mono text-lg tracking-wider break-all flex items-center justify-center">
          <motion.span
            key={displayPassword}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-900 dark:text-slate-50"
          >
            {displayPassword || '●●●●●●●●'}
          </motion.span>
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          {/* Toggle Visibility */}
          <motion.button
            onClick={() => setIsVisible(!isVisible)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-50 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            aria-label={isVisible ? 'Hide password' : 'Show password'}
            title={isVisible ? 'Hide password' : 'Show password'}
          >
            {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </motion.button>

          {/* Copy Button */}
          <CopyButton text={password} size="md" />

          {/* Regenerate Button */}
          <motion.button
            onClick={onRegenerate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            aria-label="Regenerate password"
            title="Regenerate password"
          >
            <motion.div
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              ⟳
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
