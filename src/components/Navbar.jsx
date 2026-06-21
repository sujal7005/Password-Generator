import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/50 text-slate-900 dark:text-slate-50 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="text-3xl">🔐</div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            SecurePass
          </h1>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-300 dark:text-slate-400 hidden sm:inline">
            Password Generator
          </span>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
