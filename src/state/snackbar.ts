import mutate from '@/state'

// Actions

export const hide = () => mutate((state) => {
  state.snackbar.isVisible = false
})

export const show = (message, type = 'success', timeout = 2500) => mutate((state) => {
  state.snackbar = {
    isVisible: true,
    message,
    type
  }

  window.setTimeout(hide, timeout)
})

// Selectors

const baseSelector = state => state.snackbar

export const selectIfVisible = state => baseSelector(state).isVisible

export const selectMessage = state => baseSelector(state).message

export const selectType = state => baseSelector(state).type
