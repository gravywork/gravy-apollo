import mutate from '@/state'

// Actions

export const setLanguage = language => mutate((state) => {
  state.language = language
})

// Selectors

export const selectLanguage = state => state.language
