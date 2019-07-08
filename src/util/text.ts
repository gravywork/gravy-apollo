const ELLIPSIS = '...'

export const ellipsis = (string, maxLength = 65) => {
  if (!string) return ''
  const cutLength = maxLength - ELLIPSIS.length
  return string.length > maxLength ? `${string.substring(0, cutLength)}${ELLIPSIS}` : string
}

export const pluralize = (word, number, plural = `${word}s`) => (
  number === 1 ? word : plural
)

export const toSnakeCase = (string) => (
  string.replace(/([A-Z]+)/g, match => `_${match.toLowerCase()}`)
)

export const toCamelCase = (string) => (
  string.replace(/_(\w)/g, (match, p1) => p1.toUpperCase())
)
