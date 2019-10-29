import React, { useState } from 'react'
import styled from 'styled-components'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Box, Text } from 'grommet'

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      displayImage
    }
  }
`

const Home = ({ theme }) => {
  const [test, setTest] = useState('')
  const { loading, error, data, client } = useQuery(GET_DOGS);

  console.log(data)

  return (
    <Box
      height='100vh'
      width='100vw'
    >
      <Box
        pad='16px'
        height='500px'
        width='500px'
        background='lightgray'
        margin='auto'
      >
        <Text
          size='large'
          weight='bold'
          margin={{ bottom: '16px' }}
        >
          Login
        </Text>
      </Box>
    </Box>  
  )
}

export default Home