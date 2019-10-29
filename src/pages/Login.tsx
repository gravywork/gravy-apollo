import React, { useState } from 'react'
import styled from 'styled-components'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Box, Button, TextInput, Text } from 'grommet'
import { Link } from 'react-router-dom'

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      displayImage
    }
  }
`

const StyledInput = styled(TextInput)`
  margin-bottom: 24px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error, data, client } = useQuery(GET_DOGS);

  return (
    <>
      <Box
        height='xxsmall'
        direction='row'
        justify='between'
        margin={{ bottom: '16px' }}
      >
        <Text
          size='xxlarge'
          weight='bold'
        >
          Login
        </Text>
        <StyledLink to='/signup'> 
          <Text
            size='small'
            color='accent-4'
          >
              Sign Up
          </Text>
        </StyledLink>
      </Box>
      <StyledInput
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        size='small'
      />
      <TextInput
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        size='small'
      />
      <Box direction='row' margin={{ top: '24px' }}>
        <Button
          label="Login"
          onClick={() => {}}
        />
        <Text
          size='small'
          color='accent-4'
          margin={{ left: 'auto' }}
        >
          Forgot Password
        </Text>
      </Box>
    </>
  )
}

export default Login