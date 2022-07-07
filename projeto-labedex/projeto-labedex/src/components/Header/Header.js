import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import { StyledToolbar, LinkButton } from "./styled"
import Button from '@mui/material/Button'

const Header = () => {
    
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "Voltar p lista" : "Minha Labedex ")
    

    const logout = () => {
        
      }
   
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button color="inherit">
                    <LinkButton to={`/my-labedex`}>
                        {rightButtonText}
                    </LinkButton>
                </Button>
                <Button color="inherit">
                
                    
                </Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
