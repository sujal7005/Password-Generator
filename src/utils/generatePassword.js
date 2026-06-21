import { CHARACTER_SETS, SIMILAR_CHARS, AMBIGUOUS_SYMBOLS } from '../constants/characterSets'

/**
 * Generate a random password based on specified options
 * @param {Object} options - Password generation options
 * @returns {string} Generated password
 */
export function generatePassword(options = {}) {
  const {
    length = 16,
    useUppercase = true,
    useLowercase = true,
    useNumbers = true,
    useSymbols = true,
    excludeSimilar = false,
    excludeAmbiguous = false,
    useSpaces = false,
    easyToRead = false,
  } = options

  let availableChars = ''

  // Build character set
  if (useUppercase) availableChars += CHARACTER_SETS.uppercase
  if (useLowercase) availableChars += CHARACTER_SETS.lowercase
  if (useNumbers) availableChars += CHARACTER_SETS.numbers
  if (useSymbols) availableChars += CHARACTER_SETS.symbols
  if (useSpaces) availableChars += CHARACTER_SETS.spaces

  // Remove similar characters if requested
  if (excludeSimilar) {
    availableChars = availableChars
      .split('')
      .filter((char) => !SIMILAR_CHARS.includes(char))
      .join('')
  }

  // Remove ambiguous symbols if requested
  if (excludeAmbiguous) {
    availableChars = availableChars
      .split('')
      .filter((char) => !AMBIGUOUS_SYMBOLS.includes(char))
      .join('')
  }

  if (availableChars.length === 0) {
    return ''
  }

  let password = ''

  if (easyToRead) {
    // For easy-to-read passwords, ensure at least one character from each enabled set
    const charSets = []
    if (useUppercase && (!excludeSimilar || CHARACTER_SETS.uppercase.split('').some((c) => !SIMILAR_CHARS.includes(c)))) {
      charSets.push(useUppercase ? (excludeSimilar ? CHARACTER_SETS.uppercase.split('').filter((c) => !SIMILAR_CHARS.includes(c)).join('') : CHARACTER_SETS.uppercase) : '')
    }
    if (useLowercase && (!excludeSimilar || CHARACTER_SETS.lowercase.split('').some((c) => !SIMILAR_CHARS.includes(c)))) {
      charSets.push(useLowercase ? (excludeSimilar ? CHARACTER_SETS.lowercase.split('').filter((c) => !SIMILAR_CHARS.includes(c)).join('') : CHARACTER_SETS.lowercase) : '')
    }
    if (useNumbers && (!excludeSimilar || CHARACTER_SETS.numbers.split('').some((c) => !SIMILAR_CHARS.includes(c)))) {
      charSets.push(useNumbers ? (excludeSimilar ? CHARACTER_SETS.numbers.split('').filter((c) => !SIMILAR_CHARS.includes(c)).join('') : CHARACTER_SETS.numbers) : '')
    }

    // Add at least one from each enabled set
    for (let i = 0; i < length; i++) {
      const charset = charSets[i % charSets.length]
      if (charset) {
        password += charset.charAt(Math.floor(Math.random() * charset.length))
      }
    }
  } else {
    // Standard random password generation
    for (let i = 0; i < length; i++) {
      password += availableChars.charAt(Math.floor(Math.random() * availableChars.length))
    }
  }

  return password
}

/**
 * Generate multiple passwords
 * @param {number} count - Number of passwords to generate
 * @param {Object} options - Password generation options
 * @returns {string[]} Array of generated passwords
 */
export function generateMultiplePasswords(count = 5, options = {}) {
  return Array.from({ length: count }, () => generatePassword(options))
}
