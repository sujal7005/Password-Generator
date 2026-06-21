import { createContext, useState, useEffect, useCallback, useContext } from 'react'
import { STORAGE_KEYS } from '../constants/characterSets'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME)
      if (saved !== null) {
        return saved === 'dark'
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (localStorage.getItem(STORAGE_KEYS.THEME) === null) {
        setIsDark(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
