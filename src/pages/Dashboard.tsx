import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Text } from 'grommet'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const Sidebar = styled(Box)`
  position: absolute;
  left: 0;
`

const Content = styled(Box)`
  position: absolute;
  left: 200px;
`

const GET_USER = gql`
  query GetUser {
    user @client {
      firstName,
      lastName,
      id,
      email
    }
  }
`;

const Dashboard = () => {
  const { data, loading } = useQuery(GET_USER)

  console.log(data)

  return (
    <Box
      height='100vh'
      width='100vw'
      background='#f8fafd'
    >
      <Sidebar background='neutral-4' width='200px' height='100vh'></Sidebar>
      <Content height='100vh' width='100%'>
        {loading
          ? <div>Content Loading</div>
          : <Text size='xlarge' margin='24px'>Welcome {data.user.firstName} {data.user.lastName}</Text>
        }
      </Content>
    </Box>
  )
}

export default Dashboard