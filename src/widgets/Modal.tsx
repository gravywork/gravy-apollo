import React from 'react'

import ActionRow from '@/components/ActionRow'
import Card, { Section } from '@/components/Card'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'

import { hide } from '@/state/modal'

const Modal = ({ children, title }) => (
  <Card>
    <Section padBottom padTop>
      <ActionRow justify='space-between'>
        <Text color='black88' weight={700}>
          {title}
        </Text>
        <IconButton
          circumference={2}
          size={0.875}
          onClick={hide}
        >
          <Icon name='times' />
        </IconButton>
      </ActionRow>
    </Section>
    {children}
  </Card>
)

export default Modal
