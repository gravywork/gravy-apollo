import mutate from '@/state'

// Actions

export const hide = () => mutate((state) => {
  state.modal = {
    component: null,
    props: {}
  }
})

export const show = (component, props = {}) => mutate((state) => {
  state.modal = {
    component,
    props
  }
})

// Selectors

const baseSelector = state => state.modal

export const selectComponent = state => baseSelector(state).component

export const selectProps = state => baseSelector(state).props
