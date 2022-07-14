import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import styled from 'styled-components'

export const CardStyled = styled(Card)`
  margin: 10px 5px;
`

export const CardImage = styled(CardMedia)`
  min-height: max-content;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DivImage = styled.div`
    max-width: 345px;
    height: 300px;
    background: ${props => props.typeColor}98;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.url});
    background-size: 300px 300px;
    background-repeat: no-repeat;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
`

export const DivTypes = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
`
