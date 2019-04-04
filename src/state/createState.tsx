import produce from 'immer'
import React, { Component } from 'react'

const naiveEqualityCheck = (prev, next) => prev === next

const selectEverything = state => state

const createState = (initialState = {}, equalityCompare = naiveEqualityCheck) => {
  let updateState = null

  const { Provider, Consumer } = React.createContext({})

  const mutate = (fn, cb = undefined) => {
    if (typeof updateState === 'function') {
      updateState(fn, cb)
    }

    initialState = produce(initialState, fn)
    if (typeof cb === 'function') cb()
  }

  class StateProvider extends Component {
    state = {}

    componentDidMount() {
      if (updateState !== null) {
        throw 'Only mount a single provider'
      }

      this.setState(initialState)
      updateState = this.updateState
    }

    componentWillUnmount() {
      updateState = null
    }

    updateState = (fn, cb) => this.setState(produce(fn), cb)

    render() {
      return (
        <Provider value={updateState ? this.state : initialState}>
          {this.props.children}
        </Provider>
      )
    }
  }

  class ConsumerOptimization extends Component {
    static defaultProps = {
      version: null
    }

    shouldComponentUpdate(nextProps) {
      if (this.props.version !== nextProps.version) {
        return true
      }

      return !!Object.keys(this.props.state).find(key => (
        !equalityCompare(this.props.state[key], nextProps.state[key])
      ))
    }

    render() {
      const { children, state } = this.props

      return children(state)
    }
  }

  class StateConsumer extends Component {
    static defaultProps = {
      impure: false,
      select: state => ({ state: selectEverything(state) })
    }

    static getDerivedStateFromProps(props, state) {
      return {
        version: state.version + 1
      }
    }

    state = {
      version: 0
    }

    renderConsumer = (state) => {
      const { children, impure, render, select } = this.props
      const { version } = this.state

      const props = impure ? { version } : {}

      return (
        <ConsumerOptimization {...props} state={select(state)}>
          {typeof render === 'function' ? render : children}
        </ConsumerOptimization>
      )
    }

    render() {
      return (
        <Consumer>
          {this.renderConsumer}
        </Consumer>
      )
    }
  }

  return {
    StateConsumer,
    StateProvider,
    mutate
  }
}

export default createState
