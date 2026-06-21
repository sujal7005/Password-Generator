import { useState, useCallback } from 'react'
import { generatePassword } from '../utils/generatePassword'
import toast from 'react-hot-toast'
import { STORAGE_KEYS, MAX_HISTORY } from '../constants/characterSets'

/**
 * Custom hook for password generation and history management
 */
export function usePasswordGenerator() {
  const [password, setPassword] = useState('')
  const [options, setOptions] = useState({
    length: 16,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false,
    useSpaces: false,
    easyToRead: false,
  })
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.HISTORY)
    return saved ? JSON.parse(saved) : []
  })

  // Generate new password
  const generate = useCallback(() => {
    const newPassword = generatePassword(options)
    setPassword(newPassword)
    
    // Add to history
    const timestamp = new Date().toLocaleString()
    const newHistory = [
      { password: newPassword, timestamp, id: Date.now() },
      ...history,
    ].slice(0, MAX_HISTORY)
    
    setHistory(newHistory)
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(newHistory))
    
    return newPassword
  }, [options, history])

  // Generate password on first load
  const generateInitial = useCallback(() => {
    if (!password) {
      generate()
    }
  }, [password, generate])

  // Update options
  const updateOptions = useCallback((newOptions) => {
    setOptions((prev) => ({
      ...prev,
      ...newOptions,
    }))
  }, [])

  // Update specific option
  const updateOption = useCallback((key, value) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  // Clear history
  const clearHistory = useCallback(() => {
    setHistory([])
    localStorage.removeItem(STORAGE_KEYS.HISTORY)
    toast.success('History cleared')
  }, [])

  // Delete single history item
  const deleteHistoryItem = useCallback((id) => {
    const newHistory = history.filter((item) => item.id !== id)
    setHistory(newHistory)
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(newHistory))
  }, [history])

  return {
    password,
    setPassword,
    options,
    updateOptions,
    updateOption,
    generate,
    generateInitial,
    history,
    clearHistory,
    deleteHistoryItem,
  }
}
