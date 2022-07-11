import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
  DetailsContainer,
  ImageContainer,
  SkillsContainer,
  StatsContainer,
  Scroll,
  Image,
} from './styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

export default function Details() {
  const [pokemon, setPokemon] = useState({})
  const { name } = useParams()

  useEffect(() => {
    if (name) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
          setPokemon(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [name])

  return (
    <DetailsContainer>
      <ImageContainer>
        <Card>
          <h1>Imagem Frontal</h1>
          <Image src={pokemon?.sprites?.front_default} alt='pokemon' />
          <h1>Imagem Traseira</h1>
          <Image src={pokemon?.sprites?.back_default} alt='pokemon' />
        </Card>
      </ImageContainer>
      <StatsContainer>
        <Card>
          <h1>Stats</h1>
          <CardContent>
            {pokemon?.stats?.map((stat) => (
              <p key={stat.stat.name}>
                {stat.stat.name.toUpperCase()}:{' '}
                <strong>{stat.base_stat}</strong>
              </p>
            ))}
          </CardContent>
        </Card>
      </StatsContainer>
      <SkillsContainer>
        <Card>
          <h1>Types</h1>
          <span>
            <strong>
              {pokemon.types?.map((type) => {
                return (
                  <>
                    <span>{type.type.name}</span>
                    <br></br>
                  </>
                )
              })}
            </strong>
          </span>

          <h1>Moves</h1>
          <span>
            <Scroll>
              {pokemon.moves?.map((move) => {
                return (
                  <>
                    <span>{move.move.name}</span>
                    <br></br>
                  </>
                )
              })}
            </Scroll>
          </span>
        </Card>
      </SkillsContainer>
    </DetailsContainer>
  )
}
