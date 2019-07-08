export const AUTH_KEY = 'token'

export default {
  clear: () => window.localStorage.clear(),
  get: (key: string) => JSON.parse(window.localStorage.getItem(key)),
  remove: (key: string) => window.localStorage.removeItem(key),
  set: (key: string, value: any) => window.localStorage.setItem(key, JSON.stringify(value))
}
