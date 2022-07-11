import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #eb34b4;
`;
export const Button = styled.button`
  color: #626CC3;
  //border: none;
  background-color: white;
  border-color: #626cc3;

  padding: 10px;
  border-radius: 5px;
  margin: 10px 10px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  &:hover {
    background-color: #626cc3;
    color: white;
  }
`;
export const Title = styled.h1`
  color: #515151;
  margin: 20px 30px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
