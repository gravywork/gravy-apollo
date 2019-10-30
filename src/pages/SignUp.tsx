import React, { useState } from 'react'
import styled from 'styled-components'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Box, Button, TextInput, Select, Text } from 'grommet'
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
  margin-bottom: 16px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;
`

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [marketing, setMarketing] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error, data, client } = useQuery(GET_DOGS);

  return (
    <>
      <Box
        direction='row'
        justify='between'
        margin={{ bottom: '16px' }}
      >
        <Text
          size='xxlarge'
          weight='bold'
        >
          Sign Up
        </Text>
        <StyledLink to='/'> 
          <Text
            size='small'
            color='accent-4'
          >
            Login
          </Text>
        </StyledLink>
      </Box>
      <StyledInput
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
        size='small'
      />
      <StyledInput
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        size='small'
      />
      <StyledInput
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        size='small'
        type='password'
      />
      <StyledInput
        placeholder="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        size='small'
      />
      <Select
        placeholder='How did you hear about us?'
        options={['App Store', 'Internet', 'Word of Mouth']}
        value={marketing}
        onChange={({ option }) => setMarketing(option)}
        size='small'
      />
      <Button
        label="Submit"
        onClick={() => {}}
        margin={{ top: '16px' }}
      />
    </>
  )
}

export default Login