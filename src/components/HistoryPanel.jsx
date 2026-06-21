import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Clock } from 'lucide-react'
import CopyButton from './CopyButton'

export default function HistoryPanel({ history = [], onDelete, onClear }) {
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  }

  if (history.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card-light p-6 text-center"
      >
        <Clock className="mx-auto mb-3 text-slate-400" size={32} />
        <p className="text-slate-400 dark:text-slate-500">
          No password history yet. Generate a password to get started!
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card-light p-6 text-slate-900 dark:text-slate-50"
    >
      <div className="flex items-center justify-between mb-4 text-slate-900 dark:text-slate-50">
        <h3 className="text-lg font-bold text-slate-200 dark:text-slate-100 flex items-center gap-2">
          <Clock size={20} />
          Password History
        </h3>
        <motion.button
          onClick={onClear}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xs px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg border border-red-500/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
          aria-label="Clear history"
        >
          Clear All
        </motion.button>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
        <AnimatePresence>
          {history.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center justify-between gap-3 p-3 bg-slate-100/80 dark:bg-slate-700/30 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="font-mono text-sm text-slate-900 dark:text-slate-100 truncate break-all">
                  {item.password}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  {item.timestamp}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <CopyButton text={item.password} size="sm" />
                <motion.button
                  onClick={() => onDelete(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                  aria-label="Delete password"
                >
                  <Trash2 size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-xs text-slate-400 dark:text-slate-500 mt-3 text-center">
        Showing {history.length} of 10 passwords
      </div>
    </motion.div>
  )
}
