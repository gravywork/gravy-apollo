export const scrollTo = (elementId, options = {}) => {
  options.behavior = options.behavior || 'smooth'

  const el = document.getElementById(elementId)
  el.scrollIntoView(options)
}
