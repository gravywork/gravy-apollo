import React from 'react'
import { withRouter } from 'react-router-dom'

import Overlay from '@/widgets/Overlay'

import { withState } from '@/state'
import { hide, selectComponent, selectProps } from '@/state/modal'

const noOp = () => undefined

const ModalRoot = ({ component: Component, props, ...rest }) => (
  Component
    ? <Overlay onClickOut={Component.disableClickout ? noOp : hide}>
        {React.createElement(Component, {
          ...rest,
          ...props,
          onRequestClose: hide
        })}
      </Overlay>
    : null
)

const Connected = withRouter(ModalRoot)

export default withState(state => ({
  component: selectComponent(state),
  props: selectProps(state)
}))(Connected)
