import React from 'react'

import { storiesOf } from '@storybook/react'

import PageWrapper from '@/widgets/PageWrapper'

storiesOf('widgets/PageWrapper', module)
  .add('default', () => (
    <PageWrapper>
      Wrapped content
    </PageWrapper>
  ))
