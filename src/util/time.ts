export const isBefore = (date: Date): boolean => (
  new Date() < date
)

export const secondsFromNow = (secs: number): Date => (
  new Date(new Date().getTime() + (secs * 1000))
)
