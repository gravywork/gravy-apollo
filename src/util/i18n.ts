import dictionary from '@/translations'

export const translate = ({ language, t, ...rest }) => {
  const keyParts = t.split('.')
  const k = keyParts[keyParts.length - 1]
  const namespaces = keyParts.slice(0, keyParts.length - 1)

  let domain = dictionary[language]

  for (const namespace of namespaces) {
    domain = domain[namespace]

    if (!domain || typeof domain !== 'object') {
      return `<!${t} missing!>`
    }
  }

  const value = domain[k]

  switch (typeof value) {
    case 'function':
      return value(rest)
    case 'string':
      return value
    default:
      return `<!${t} missing!>`
  }
}
