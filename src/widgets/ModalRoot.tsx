import React from 'react'

import Overlay from '@/widgets/Overlay'

import { hide, selectComponent, selectProps } from '@/state/modal'

import { withState } from '@/util/provider'

const ModalRoot = ({ component: Component, props }) => (
  Component
    ? <Overlay onClickOut={hide}>
        {React.createElement(Component, {
          ...props,
          onRequestClose: hide
        })}
      </Overlay>
    : null
)

export default withState(state => ({
  component: selectComponent(state),
  props: selectProps(state)
}))(ModalRoot)
