import React, { useEffect, useState } from 'react'
import PokeCard from '../../components/PokeCard/PokeCard'

import Loading from '../../components/Loading/Loading'

import { DivCards, DivPokemons } from './styles'

import Stack from '@mui/material/Stack'

import { usePokemon } from '../../hooks/PokemonProvider'

export default function Labedex() {
  const initialValue = {
    id: 0,
    image: ' ',
    isDelete: false,
    name: ' ',
    offset: 0,
    originalId: 0,
    page: ' ',
  }
  const [pokemons, setPokemons] = useState([initialValue])
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  const { buscarPokemons } = usePokemon()

  const handleChange = (event, value) => {
    setPage(value)
    setOffset((value - 1) * 20 + 1)
    if (value === 1) {
      setOffset(0)
    }
  }

  function getData() {
    setPokemons(buscarPokemons())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <DivCards>
      <DivPokemons>
        {pokemons.map((pokemon) => {
          return (
            <PokeCard
              page='labedex'
              key={pokemon.id}
              name={pokemon.name}
              originalId={pokemon.originalId}
              id={pokemon.id}
              offset={offset}
              isDelete={true}
              image={pokemon.image}
            />
          )
        })}
      </DivPokemons>
      <Stack spacing={2}></Stack>
    </DivCards>
  )
}
