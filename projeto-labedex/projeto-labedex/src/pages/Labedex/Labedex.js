import React, { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";

import Loading from "../../components/Loading/Loading";

import { DivCards, DivPokemons } from "./styles";

import Stack from "@mui/material/Stack";

import { usePokemon } from "../../hooks/PokemonProvider";

export default function Labedex() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const { buscarPokemons } = usePokemon();

  const handleChange = (event, value) => {
    setPage(value);
    setOffset((value - 1) * 20 + 1);
    if (value === 1) {
      setOffset(0);
    }
  };

  function getData() {
    setPokemons(buscarPokemons());
  }

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <DivCards>
      <h1>LABEDEX</h1>
      <DivPokemons>
        {!pokemons || pokemons === undefined || Object.keys(pokemons) < 1 ? (
          <Loading />
        ) : (
          pokemons.map((pokemon, index) => {
            return (
              <PokeCard
                key={index}
                name={pokemon.name}
                image={pokemon.image}
                id={index}
                offset={offset}
                isDelete={true}
              />
            );
          })
        )}
      </DivPokemons>
      <Stack spacing={2}></Stack>
    </DivCards>
  );
}
