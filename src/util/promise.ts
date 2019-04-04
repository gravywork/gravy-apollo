export const raise = (fn) => (err) => {
  fn(err)
  throw err
}


export const tap = (fn) => (obj) => {
  fn(obj)
  return obj
}
