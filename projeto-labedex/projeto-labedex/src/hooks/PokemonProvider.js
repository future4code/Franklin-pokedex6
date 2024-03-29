import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(() => {
    const pokemonsSaved = localStorage.getItem("labedex");

    if (pokemonsSaved) {
      return JSON.parse(pokemonsSaved);
    }

    return [];
  });

  const savePokemon = (pokemon) => {
    const pokemonsSaved = localStorage.getItem("labedex");

    const pokemonsArray = JSON.parse(pokemonsSaved);

    if (Array.isArray(pokemonsArray)) {
      localStorage.setItem(
        "labedex",
        JSON.stringify([...pokemonsArray, pokemon])
      );
    } else if (pokemonsArray != null) {
      localStorage.setItem("labedex", JSON.stringify([pokemonsArray, pokemon]));
    } else {
      localStorage.setItem("labedex", JSON.stringify([pokemon]));
    }
  };

  const buscarPokemons = () => {
    const pokemonsSaved = localStorage.getItem("labedex");

    setPokemons(JSON.parse(pokemonsSaved));

    return pokemons;
  };

  const removePokemon = (PokemonToRemove) => {
    const pokemonsSaved = localStorage.getItem("labedex");
    const pokemonsArray = JSON.parse(pokemonsSaved);
    const update = pokemonsArray.filter(
      (poke) => poke.name !== PokemonToRemove
    );

    localStorage.setItem("labedex", JSON.stringify(update));
    setPokemons(update);
  };

  return (
    <PokemonContext.Provider
      value={{
        savePokemon,
        buscarPokemons,
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };
