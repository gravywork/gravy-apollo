import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'grommet'

const Sidebar = styled(Box)`
  position: absolute;
  left: 0;
`

const Dashboard = () => {
  return (
    <Box
      height='100vh'
      width='100vw'
      background='#f8fafd'
    >
      <Sidebar background='neutral-4' width='200px' height='100vh'></Sidebar>
    </Box>
  )
}

export default Dashboard