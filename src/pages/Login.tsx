import React, { useState } from 'react'
import styled from 'styled-components'
import { gql } from "apollo-boost";
import { Box, Button, Form, TextInput, Text } from 'grommet'
import { Link } from 'react-router-dom'
import { useApolloClient, useMutation } from '@apollo/react-hooks';

const LOGIN_USER = gql`
  mutation Login($email:String!, $password:String!) {
      login(email: $email, password: $password){
        refreshToken
        token
        user {
          id
          email
          firstName
          lastName
        }
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
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(
    LOGIN_USER,
    {
      onCompleted({ login }) {
        console.log(login)
        localStorage.setItem('token', login.token);
        localStorage.setItem('refreshToken', login.refreshToken);
        client.writeData({ data: { isLoggedIn: true, user: login.user } });
      }
    }
  )
  
  return (
    <Form onSubmit={() => login({ variables: { email, password } })}>
      <Box
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
        type='password'
      />
      <Box direction='row' margin={{ top: '24px' }}>
        <Button
          primary
          label="Login"
          type='submit'
        />
        <Text
          size='small'
          color='accent-4'
          margin={{ left: 'auto' }}
        >
          Forgot Password?
        </Text>
      </Box>
    </Form>
  )
}

export default Login