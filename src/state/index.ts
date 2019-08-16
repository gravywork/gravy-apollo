import createState from 'react-immer-state'

const { StateConsumer, StateProvider, mutate, withState } = createState({
  language: 'en',
  modal: {
    component: null,
    props: {}
  },
  snackbar: {
    isVisible: false,
    message: '',
    type: 'success'
  }
})

export { StateConsumer, StateProvider, withState }

export default mutate
