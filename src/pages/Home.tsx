import React, { useState } from 'react'
import styled from 'styled-components'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      displayImage
    }
  }
`

const Home = () => {
  const [test, setTest] = useState('')
  const { loading, error, data, client } = useQuery(GET_DOGS);

  console.log(data)
  return (
    <div>test</div>
  )
}

export default Home