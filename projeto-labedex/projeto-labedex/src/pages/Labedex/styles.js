import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";



export const DivPokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
`;

export const DivCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledPagination = styled(Pagination)`
  color: black;
`;

export const CardTest = styled(CardContent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Vc = styled(Typography)`

  align-items: center;
  justify-content: center;
  text-align: center;
`