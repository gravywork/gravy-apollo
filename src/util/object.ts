export const transformKeys = (obj, func) => {
  const newObject = {}
  Object.keys(obj).forEach((key, index, array, value = obj[key]) => { newObject[func(key)] = value })
  return newObject
}

export const deepTransformKeys = (obj, func) => {
  if (!obj) return obj
  if (typeof obj !== 'object') return obj

  if (Array.isArray(obj)) {
    return obj.map(element => deepTransformKeys(element, func))
  }

  const newObject = {}
  Object.keys(obj).forEach((key) => {
    newObject[func(key)] = deepTransformKeys(obj[key], func)
  })
  return newObject
}
