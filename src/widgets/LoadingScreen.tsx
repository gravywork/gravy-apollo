import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'
import Text from '@/components/Text'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;

  background-color: ${p => p.theme[p.bgColor]};
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > ${Icon} {
    font-size: 4rem;
  }

  > ${Text} {
    margin-top: 1.5rem;
  }
`

const LoadingScreen = ({ name, prompt, ...rest }) => (
  <Wrapper {...rest}>
    <Inner>
      <Icon spin name={name} />
      <Text>
        {prompt}
      </Text>
    </Inner>
  </Wrapper>
)

LoadingScreen.defaultProps = {
  bgColor: 'transparent',
  name: 'circle-notch',
  prompt: 'Loading...'
}

export default LoadingScreen
