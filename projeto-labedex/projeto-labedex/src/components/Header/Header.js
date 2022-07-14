import React from 'react'
import AppBar from '@mui/material/AppBar'
import { StyledToolbar } from './styled'
import Button from '@mui/material/Button'

const Header = () => {
  const ButtonText =
    window.location.pathname === '/' ? 'Minha Labedex' : 'Início'
  const ButtonRedirect = window.location.pathname === '/' ? '/my-labedex' : '/'
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Button
          onClick={() => {
            window.location.href = ButtonRedirect
          }}
          color='inherit'
        >
          {ButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
