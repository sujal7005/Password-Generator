import { motion } from 'framer-motion'

export default function PasswordOptions({ options, onOptionChange }) {
  const checkboxes = [
    {
      id: 'useUppercase',
      label: 'Uppercase Letters (A-Z)',
      description: 'Include uppercase letters',
      defaultChecked: true,
    },
    {
      id: 'useLowercase',
      label: 'Lowercase Letters (a-z)',
      description: 'Include lowercase letters',
      defaultChecked: true,
    },
    {
      id: 'useNumbers',
      label: 'Numbers (0-9)',
      description: 'Include numbers',
      defaultChecked: true,
    },
    {
      id: 'useSymbols',
      label: 'Symbols (!@#$%^&*)',
      description: 'Include special symbols',
      defaultChecked: true,
    },
    {
      id: 'excludeSimilar',
      label: 'Exclude Similar Characters',
      description: 'Remove 0 O o I l 1 to avoid confusion',
      defaultChecked: false,
    },
    {
      id: 'excludeAmbiguous',
      label: 'Exclude Ambiguous Symbols',
      description: 'Remove {}[]()\\\'"`~,;:.<>?',
      defaultChecked: false,
    },
    {
      id: 'useSpaces',
      label: 'Include Spaces',
      description: 'Add spaces to password',
      defaultChecked: false,
    },
    {
      id: 'easyToRead',
      label: 'Easy to Read Password',
      description: 'Generate more readable passwords',
      defaultChecked: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="glass-card-light p-6 mb-6 text-slate-900 dark:text-slate-50"
    >
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
        Password Options
      </h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {checkboxes.map((checkbox) => (
          <motion.label
            key={checkbox.id}
            variants={itemVariants}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group"
          >
            <input
              type="checkbox"
              checked={options[checkbox.id] || false}
              onChange={(e) => onOptionChange(checkbox.id, e.target.checked)}
              className="mt-1 w-5 h-5 rounded accent-blue-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              aria-label={checkbox.label}
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                {checkbox.label}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                {checkbox.description}
              </div>
            </div>
          </motion.label>
        ))}
      </motion.div>

      {/* At least one character type must be selected */}
      {!options.useUppercase &&
        !options.useLowercase &&
        !options.useNumbers &&
        !options.useSymbols && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-sm text-red-400"
          >
            ⚠ Please select at least one character type
          </motion.div>
        )}
    </motion.div>
  )
}
