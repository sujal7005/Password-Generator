import { STRENGTH_LEVELS } from '../constants/characterSets'

/**
 * Calculate password entropy (bits of randomness)
 * @param {number} passwordLength - Length of password
 * @param {number} charsetSize - Size of character set
 * @returns {number} Entropy in bits
 */
export function calculateEntropy(passwordLength, charsetSize) {
  if (charsetSize === 0) return 0
  return Math.round(Math.log2(Math.pow(charsetSize, passwordLength)))
}

/**
 * Calculate password strength
 * @param {string} password - The password to analyze
 * @returns {Object} Strength information
 */
export function calculateStrength(password) {
  if (!password) {
    return {
      score: 0,
      level: STRENGTH_LEVELS.WEAK,
      entropy: 0,
      feedback: [],
      percentage: 0,
    }
  }

  let score = 0
  const feedback = []
  let charsetSize = 0

  // Length scoring
  const length = password.length
  score += Math.min(length * 4, 40) // Max 40 points for length
  if (length < 8) feedback.push('Password is too short (minimum 8 characters recommended)')
  if (length >= 8) score += 10
  if (length >= 12) score += 10
  if (length >= 16) score += 10
  if (length >= 20) score += 10

  // Character set diversity
  const hasLower = /[a-z]/.test(password)
  const hasUpper = /[A-Z]/.test(password)
  const hasNumbers = /[0-9]/.test(password)
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)
  const hasSpaces = /\s/.test(password)

  if (hasLower) {
    score += 10
    charsetSize += 26
  } else {
    feedback.push('Add lowercase letters')
  }

  if (hasUpper) {
    score += 10
    charsetSize += 26
  } else {
    feedback.push('Add uppercase letters')
  }

  if (hasNumbers) {
    score += 10
    charsetSize += 10
  } else {
    feedback.push('Add numbers')
  }

  if (hasSymbols) {
    score += 20
    charsetSize += 32 // Approximate
  } else {
    feedback.push('Add symbols for better security')
  }

  if (hasSpaces) {
    score += 5
    charsetSize += 1
  }

  // Penalize patterns
  if (/(.)\1{2,}/.test(password)) {
    score -= 10
    feedback.push('Avoid repeating characters')
  }

  if (/^[a-z]+$|^[A-Z]+$|^[0-9]+$/.test(password)) {
    score -= 20
    feedback.push('Use mixed character types')
  }

  // Sequential checks
  if (/0123|1234|2345|3456|4567|5678|6789|abcd|bcde|cdef/.test(password.toLowerCase())) {
    score -= 15
    feedback.push('Avoid sequential characters')
  }

  // Calculate entropy
  const entropy = calculateEntropy(length, charsetSize)

  // Clamp score between 0 and 100
  score = Math.max(0, Math.min(100, score))

  // Determine level
  let level = STRENGTH_LEVELS.WEAK
  if (score >= 80) level = STRENGTH_LEVELS.VERY_STRONG
  else if (score >= 60) level = STRENGTH_LEVELS.STRONG
  else if (score >= 40) level = STRENGTH_LEVELS.MEDIUM

  return {
    score,
    level,
    entropy,
    feedback: feedback.slice(0, 3), // Limit to 3 suggestions
    percentage: score,
  }
}

/**
 * Get password strength color
 * @param {number} score - Password strength score
 * @returns {string} Color code
 */
export function getStrengthColor(score) {
  if (score >= 80) return '#3B82F6' // Very Strong - Blue
  if (score >= 60) return '#22C55E' // Strong - Green
  if (score >= 40) return '#FACC15' // Medium - Yellow
  return '#EF4444' // Weak - Red
}
