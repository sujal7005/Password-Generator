import { motion } from 'framer-motion'
import { Github, Heart, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/90 dark:bg-slate-950 text-slate-900 dark:text-slate-50 border-t border-slate-200/70 dark:border-slate-800/50 mt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔐</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">SecurePass</h3>
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-500 text-center md:text-left">
              Generate strong, secure passwords instantly with advanced customization.
            </p>
          </div>

          {/* Features Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="text-center text-sm space-y-2 text-slate-400 dark:text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition">Password Generation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Strength Meter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Password History</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Dark Mode</a></li>
            </ul>
          </div>

          {/* Digital Heroes CTA */}
          <div className="flex flex-col items-center md:items-end">
            <motion.a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl mb-4"
            >
              Built for Digital Heroes
            </motion.a>
            <p className="text-xs text-slate-500 dark:text-slate-600">
              Platform Powered by Excellence
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent dark:via-slate-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Developer Info */}
          <div className="flex flex-col items-center md:items-start text-sm">
            <p className="text-slate-600 dark:text-slate-500 mb-1">
              <span className="font-semibold">Developed by</span>
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
              <span className="text-slate-900 dark:text-white font-semibold">Sujal Gupta</span>
              <a
                href="mailto:your-email@gmail.com"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
                aria-label="Email"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">sujal0705gupta@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/sujal7005"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="text-slate-300" />
            </motion.a>
            <motion.a
              href="mailto:sujal0705gupta@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-slate-300" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
