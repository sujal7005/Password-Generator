// Character sets for password generation
export const CHARACTER_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  spaces: ' ',
}

// Characters to exclude for similarity
export const SIMILAR_CHARS = '0O o I l 1'

// Ambiguous symbols to exclude
export const AMBIGUOUS_SYMBOLS = '{}[]()/\\\'"`~,;:.<>'

// Password strength levels
export const STRENGTH_LEVELS = {
  WEAK: { label: 'Weak', color: '#EF4444', bg: 'bg-red-500', index: 0 },
  MEDIUM: { label: 'Medium', color: '#FACC15', bg: 'bg-yellow-500', index: 1 },
  STRONG: { label: 'Strong', color: '#22C55E', bg: 'bg-green-500', index: 2 },
  VERY_STRONG: { label: 'Very Strong', color: '#3B82F6', bg: 'bg-blue-500', index: 3 },
}

// Max password history items
export const MAX_HISTORY = 10

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'securepass_theme',
  HISTORY: 'securepass_history',
}
