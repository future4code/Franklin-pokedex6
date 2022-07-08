import styled from "styled-components"
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: white;
`