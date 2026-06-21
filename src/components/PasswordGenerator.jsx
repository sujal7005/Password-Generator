import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePasswordGenerator } from '../hooks/usePasswordGenerator'
import { calculateStrength } from '../utils/calculateStrength'
import PasswordDisplay from './PasswordDisplay'
import PasswordOptions from './PasswordOptions'
import PasswordLengthSlider from './PasswordLengthSlider'
import StrengthMeter from './StrengthMeter'
import HistoryPanel from './HistoryPanel'

export default function PasswordGenerator() {
  const {
    password,
    options,
    updateOption,
    generate,
    generateInitial,
    history,
    deleteHistoryItem,
    clearHistory,
  } = usePasswordGenerator()

  const strength = calculateStrength(password)
  const [showHistory, setShowHistory] = useState(false)

  // Generate initial password on mount
  useEffect(() => {
    generateInitial()
  }, [generateInitial])

  return (
    <div className="space-y-8 text-slate-900 dark:text-slate-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🔐 SecurePass
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Generate strong, secure passwords instantly with advanced customization options.
        </p>
      </motion.div>

      {/* Main Card Container */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Main Controls */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Password Display */}
          <PasswordDisplay password={password} onRegenerate={generate} />

          {/* Strength Meter */}
          <StrengthMeter password={password} />

          {/* Length Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card-light p-6"
          >
            <PasswordLengthSlider
              length={options.length}
              onChange={(value) => updateOption('length', value)}
            />
          </motion.div>

          {/* Password Options */}
          <PasswordOptions
            options={options}
            onOptionChange={updateOption}
          />

          {/* Generate Button */}
          <motion.button
            onClick={generate}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            aria-label="Generate new password"
          >
            Generate Password
          </motion.button>
        </motion.div>

        {/* Right Column - Stats and History */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Stats Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card-light p-6 rounded-2xl text-slate-900 dark:text-slate-50"
          >
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wide">
              Password Stats
            </h3>

            <div className="space-y-4">
              {/* Length */}
              <div className="flex items-center justify-between p-3 bg-slate-100/80 dark:bg-slate-700/30 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Length</span>
                <span className="font-bold text-blue-400">{options.length}</span>
              </div>

              {/* Strength Score */}
              <div className="flex items-center justify-between p-3 bg-slate-100/80 dark:bg-slate-700/30 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Strength</span>
                <span className={`font-bold ${
                  strength.level.label === 'Weak'
                    ? 'text-red-400'
                    : strength.level.label === 'Medium'
                    ? 'text-yellow-400'
                    : strength.level.label === 'Strong'
                    ? 'text-green-400'
                    : 'text-blue-400'
                }`}>
                  {strength.percentage}%
                </span>
              </div>

              {/* Entropy */}
              <div className="flex items-center justify-between p-3 bg-slate-100/80 dark:bg-slate-700/30 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Entropy</span>
                <span className="font-bold text-purple-400">{strength.entropy} bits</span>
              </div>

              {/* Character Count */}
              <div className="flex items-center justify-between p-3 bg-slate-100/80 dark:bg-slate-700/30 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Types</span>
                <motion.span
                  key={password}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="font-bold text-green-400"
                >
                  {[
                    options.useUppercase,
                    options.useLowercase,
                    options.useNumbers,
                    options.useSymbols,
                  ].filter(Boolean).length}/4
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* History Toggle and Panel */}
          <div>
            <motion.button
              onClick={() => setShowHistory(!showHistory)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 px-4 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors mb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              {showHistory ? '▼ Hide History' : '▶ Show History'} ({history.length})
            </motion.button>

            {showHistory && (
              <HistoryPanel
                history={history}
                onDelete={deleteHistoryItem}
                onClear={clearHistory}
              />
            )}
          </div>

          {/* Features List */}
          <motion.div className="glass-card-light p-6 rounded-2xl text-slate-900 dark:text-slate-50">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wide">
              Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-500">
              {[
                '✓ Real-time strength analysis',
                '✓ Customizable character sets',
                '✓ Password history (10 max)',
                '✓ Dark/Light theme',
                '✓ Copy to clipboard',
                '✓ Entropy calculation',
                '✓ WCAG accessibility',
                '✓ Mobile responsive',
              ].map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mt-12"
      >
        {[
          {
            title: 'Secure',
            description: 'All operations happen locally in your browser. No data is stored on servers.',
            icon: '🔒',
          },
          {
            title: 'Fast',
            description: 'Generate unlimited passwords instantly with real-time strength analysis.',
            icon: '⚡',
          },
          {
            title: 'Smart',
            description: 'Advanced entropy calculation and password strength meter for maximum security.',
            icon: '🧠',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card-light p-6 text-center rounded-2xl text-slate-900 dark:text-slate-50"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-500">{item.description}</p>
          </motion.div>
          ))}
      </motion.div>
    </div>
  )
}
