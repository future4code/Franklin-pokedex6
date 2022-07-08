import React, { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import { DivCards, DivPokemons, StyledPagination } from "./styles";
import Stack from "@mui/material/Stack";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState({});
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    setOffset((value - 1) * 20 + 1);
    if (value === 1) {
      setOffset(0);
    }
    window.scrollTo(0, 0)
  };

  function getData() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=21`)
      .then((response) => {
        console.log("total ", response.data.results);
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(getData, [offset]);

  return (
    <DivCards>
      <DivPokemons>
        {!pokemons || pokemons === undefined || Object.keys(pokemons) < 1 ? (
          <Loading />
        ) : (
          pokemons.map((pokemon, index) => {
            return (
              <PokeCard
                key={index}
                name={pokemon.name}
                image={pokemon.url}
                id={index}
                offset={offset}
                isDelete={false}
              />
            );
          })
        )}
      </DivPokemons>
      <Stack spacing={2}>
        <StyledPagination
          count={58}
          page={page}
          onChange={handleChange}
          color={"primary"}
        />
      </Stack>
    </DivCards>
  );
}
