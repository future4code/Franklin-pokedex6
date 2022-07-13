import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import {
  DetailsContainer,
  ImageContainer,
  SkillsContainer,
  StatsContainer,
  Scroll,
  Image,
  DivImage
} from './styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import PokeFrontAndBack from '../../components/PokeFrontAndBack/PokeFrontAndBack'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stats from '../../components/Stats'

export default function Details() {
  const [pokemon, setPokemon] = useState({})
  const { name } = useParams()
  const [maxStat, setMaxStat] = useState(0)

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

  const max = (stats) => {
    const stat = stats.map((stat) => (stat?.base_stat))
    return(Math.max(...stat))
  }

  const valueBar = (maxValue, stat) => {
    return ((stat/maxValue) * 100)
  }

  return (
    <DetailsContainer>
      <ImageContainer>
        <Card>
          <PokeFrontAndBack imageFront={pokemon?.sprites?.front_default} imageBack={pokemon?.sprites?.back_default} imageShiny={pokemon?.sprites?.front_shiny}/>
        </Card>
      </ImageContainer>
      <StatsContainer>
        <Card>
          <h1>Stats</h1>
          <CardContent>
            {pokemon?.stats?.map((stat) => (
              <div>
              <p key={stat.stat.name}>
                {stat.stat.name.toUpperCase()}:{' '}
              </p>
              <ProgressBar now={valueBar(max(pokemon.stats), stat.base_stat)} label={stat.base_stat} />
              </div>
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
