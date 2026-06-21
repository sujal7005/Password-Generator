import { motion } from 'framer-motion'

export default function PasswordLengthSlider({ length = 16, onChange }) {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value))
  }

  return (
    <div className="space-y-3 text-slate-900 dark:text-slate-50">
      <div className="flex items-center justify-between">
        <label htmlFor="length-slider" className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Password Length
        </label>
        <motion.span
          key={length}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold"
        >
          {length}
        </motion.span>
      </div>

      <div className="relative">
        <input
          id="length-slider"
          type="range"
          min="4"
          max="64"
          value={length}
          onChange={handleChange}
          className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          aria-label="Password length"
        />
        <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 mt-2 px-1">
          <span>4</span>
          <span>64</span>
        </div>
      </div>

      {/* Visual representation */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: length > i * 4 ? 1 : 0.3,
              opacity: length > i * 4 ? 1 : 0.3,
            }}
            className="h-6 flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm"
          />
        ))}
      </div>
    </div>
  )
}
