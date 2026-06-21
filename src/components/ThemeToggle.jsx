import { useTheme } from '../hooks/useTheme.jsx'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon size={20} className="text-yellow-400" />
        ) : (
          <Sun size={20} className="text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  )
}
