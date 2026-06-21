import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useClipboard } from '../hooks/useClipboard'

export default function CopyButton({ text = '', size = 'md' }) {
  const { copyToClipboard, isCopied } = useClipboard()

  const sizeClasses = {
    sm: 'p-1.5 text-sm',
    md: 'p-2 text-base',
    lg: 'p-3 text-lg',
  }

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  return (
    <motion.button
      onClick={() => copyToClipboard(text, 'Password copied successfully!')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeClasses[size]} rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400`}
      aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
    >
      <motion.div
        initial={false}
        animate={{ scale: isCopied ? 1.2 : 1, rotate: isCopied ? 10 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isCopied ? (
          <Check size={iconSize[size]} className="text-white" />
        ) : (
          <Copy size={iconSize[size]} className="text-white" />
        )}
      </motion.div>
    </motion.button>
  )
}
