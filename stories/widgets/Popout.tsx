import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '@/components/Button'
import Dropdown, { Group, Item } from '@/components/Dropdown'
import Popout from '@/widgets/Popout'

import Padding from '../Padding'

const Menu = () => (
  <Dropdown>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Group>
      <Item>Item 3</Item>
    </Group>
  </Dropdown>
)

storiesOf('widgets/Popout', module)
  .add('default', () => (
    <Padding>
      <Popout
        component={<Menu />}
        placement='bottom-start'
        transformOrigin='top left'
      >
        <Button>
          Open Dropdown
        </Button>
      </Popout>
    </Padding>
  ))
