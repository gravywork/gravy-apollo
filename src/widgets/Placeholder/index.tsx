import React, { Component } from 'react'

import Bars from './Bars'
import None from './None'
import Segment from './Segment'

import { StateConsumer } from '@/state'

export class Placeholder extends Component {
  public static Bars = Bars
  public static None = None
  public static Segment = Segment

  public static defaultProps = {
    component: Bars,
    delay: 200,
    didLoad: true,
    isLoading: false,
    simple: false
  }

  public state = {
    isLoading: this.props.isLoading
  }

  private delayTimeout = null

  public componentDidUpdate(prevProps) {
    if (!prevProps.isLoading && this.props.isLoading) {
      this.beginLoading()
    }

    if (prevProps.isLoading && !this.props.isLoading) {
      this.stopLoading()
    }
  }

  public componentWillUnmount() {
    this.clearDelayTimeout()
  }

  private beginLoading = () => {
    this.delayTimeout = setTimeout(() => (
      this.setState({ isLoading: true })
    ), this.props.delay)
  }

  private clearDelayTimeout = () => {
    if (this.delayTimeout) clearTimeout(this.delayTimeout)
  }

  private stopLoading = () => {
    this.clearDelayTimeout()
    this.setState({ isLoading: false })
  }

  private renderSimple = () => {
    const { children, component } = this.props
    const { isLoading } = this.state

    if (isLoading) {
      return React.createElement(component)
    }

    return children
  }

  private renderWithDidLoad = () => {
    const { children, component, didLoad } = this.props
    const { isLoading } = this.state

    if (!didLoad) {
      return (
        React.createElement(component)
      )
    }

    if (isLoading) {
      return (
        <Segment>
          {children}
        </Segment>
      )
    }

    return children
  }

  public render() {
    if (this.props.simple) return this.renderSimple()
    return this.renderWithDidLoad()
  }
}

const ConnectedPlaceholder = ({ selectIfLoading, ...rest }) => (
  <StateConsumer select={state => ({ isLoading: selectIfLoading(state) })}>
    {({ isLoading }) => (
      <Placeholder isLoading={isLoading} {...rest} />
    )}
  </StateConsumer>
)

export default ConnectedPlaceholder
