import createState from './createState'

const { StateConsumer, StateProvider, mutate } = createState({
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

export { StateConsumer, StateProvider }

export default mutate
