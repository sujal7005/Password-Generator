import { useTheme } from './hooks/useTheme.jsx'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import PasswordGenerator from './components/PasswordGenerator'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function App() {
  const { isDark } = useTheme()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navbar />
        
        <main className="pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <PasswordGenerator />
          </motion.div>
        </main>

        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </div>
  )
}
