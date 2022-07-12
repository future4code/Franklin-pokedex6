import React, { useEffect, useState } from 'react'
import PokeCard from '../../components/PokeCard/PokeCard'
import Loading from '../../components/Loading/Loading'
import axios from 'axios'
import { DivCards, DivPokemons, StyledPagination } from './styles'
import Stack from '@mui/material/Stack'
export default function Pokemon() {
  const [pokemons, setPokemons] = useState([])

  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
    setOffset((value - 1) * 20 + 1)
    if (value === 1) {
      setOffset(0)
    }
  }

  const labedex = JSON.parse(localStorage.getItem('labedex'))

  // a function that returns an array resulting from the subtraction of one array from another
  const difference = () => {
    const filtered = pokemons?.filter(
      (pokemon) =>
        pokemon.name !== labedex?.find((p) => p.name === pokemon.name)?.name
    )
    return filtered
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=21`)
      .then((response) => {
        setPokemons(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [offset])

  return (
    <DivCards>
      <DivPokemons>
        {difference()?.map((pokemon, index) => {
          const OriginalId = pokemon.url.split('/')[6]
          return (
            <PokeCard
              page='home'
              key={index}
              name={pokemon.name}
              originalId={OriginalId}
            />
          )
        })}
      </DivPokemons>
      <Stack spacing={2}>
        <StyledPagination
          count={58}
          page={page}
          onChange={handleChange}
          color={'primary'}
        />
      </Stack>
    </DivCards>
  )
}
