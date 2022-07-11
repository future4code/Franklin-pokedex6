import React from 'react'
import AppBar from '@mui/material/AppBar'
import { StyledToolbar, LinkButton } from './styled'
import Button from '@mui/material/Button'

const Header = () => {
  const token = localStorage.getItem('labedex')
  const ButtonText =
    window.location.pathname === '/' ? 'Minha Labedex' : 'Início'
  const ButtonRedirect = window.location.pathname === '/' ? '/my-labedex' : '/'
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Button color='inherit'>
          <LinkButton to={ButtonRedirect}>{ButtonText}</LinkButton>
        </Button>
        <Button color='inherit'></Button>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
