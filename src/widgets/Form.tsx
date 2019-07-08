import React from 'react'

import { stopEvent } from '@/util/promise'

const Form = ({ children, onSubmit }) => (
  <form onSubmit={stopEvent(onSubmit)}>
    {children}
  </form>
)

export default Form
