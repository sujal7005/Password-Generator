import { motion } from 'framer-motion'
import { calculateStrength } from '../utils/calculateStrength'
import { AlertCircle, CheckCircle, Trophy, Zap } from 'lucide-react'

export default function StrengthMeter({ password = '' }) {
  const strength = calculateStrength(password)

  const getIcon = () => {
    switch (strength.level.label) {
      case 'Weak':
        return <AlertCircle size={16} className="text-red-500" />
      case 'Medium':
        return <Zap size={16} className="text-yellow-500" />
      case 'Strong':
        return <CheckCircle size={16} className="text-green-500" />
      case 'Very Strong':
        return <Trophy size={16} className="text-blue-500" />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      {/* Strength Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Password Strength
          </label>
          <div className="flex items-center gap-2">
            {getIcon()}
            <motion.span
              key={strength.level.label}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`text-xs font-bold px-2 py-1 rounded-lg ${
                strength.level.label === 'Weak'
                  ? 'bg-red-500/20 text-red-400'
                  : strength.level.label === 'Medium'
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : strength.level.label === 'Strong'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}
            >
              {strength.level.label}
            </motion.span>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${strength.percentage}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`h-full rounded-full ${strength.level.bg} shadow-lg`}
            style={{
              boxShadow: `0 0 10px ${strength.level.color}`,
            }}
          />
        </div>

        {/* Score Display */}
        <div className="text-xs text-slate-400 dark:text-slate-500">
          <span className="font-semibold">Entropy:</span> {strength.entropy} bits
        </div>
      </div>

      {/* Feedback */}
      {strength.feedback.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-slate-100/70 dark:bg-slate-700/50 rounded-lg border border-slate-300 dark:border-slate-600"
        >
          <h4 className="text-xs font-semibold text-slate-300 dark:text-slate-200 mb-2">
            Suggestions:
          </h4>
          <ul className="space-y-1">
            {strength.feedback.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-xs text-slate-400 dark:text-slate-400"
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  )
}
