import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'

/**
 * Custom hook for clipboard operations
 */
export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(async (text, message = 'Copied to clipboard') => {
    if (!text) {
      toast.error('Nothing to copy')
      return false
    }

    try {
      // Modern API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
        setIsCopied(true)
        toast.success(message, {
          icon: '✓',
          duration: 2000,
        })
        
        // Reset after 2 seconds
        setTimeout(() => setIsCopied(false), 2000)
        return true
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        
        setIsCopied(true)
        toast.success(message, {
          icon: '✓',
          duration: 2000,
        })
        
        setTimeout(() => setIsCopied(false), 2000)
        return true
      }
    } catch (error) {
      toast.error('Failed to copy to clipboard')
      return false
    }
  }, [])

  return { copyToClipboard, isCopied }
}
