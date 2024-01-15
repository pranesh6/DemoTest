import React from 'react'
import './App.css'
import { Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1)
}))

  const headerText = [,1,,3,,2]

function App (): JSX.Element {
  const headerText = 'Expected Output'
  return (
    <Div>
      <Typography variant='h1' data-testid="header-element">
        {headerText}
      </Typography>
    </Div>
  )
}

export default App
