import React from 'react'

import Button from '@/components/Button'
import Icon from '@/components/Icon'

const LoadingButton = ({ children, isLoading, ...rest }) => (
  <Button disabled={isLoading} {...rest}>
    {isLoading &&
      <Icon spin name='circle-notch' />
    }
    {children}
  </Button>
)

export default LoadingButton
