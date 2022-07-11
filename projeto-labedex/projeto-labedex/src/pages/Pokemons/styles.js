import styled from 'styled-components'
import Pagination from '@mui/material/Pagination'

export const DivPokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
`

export const DivCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`

export const StyledPagination = styled(Pagination)`
  color: black;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #eb34b4;
`
export const Button = styled.button`
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
    color: white;
  }
`
export const Title = styled.h1`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin: 10px 30px;
`
