import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import { Typography } from '@mui/material'
import {
  DetailsContainer,
  ImageContainer,
  SkillsContainer,
  StatsContainer,
  Scroll,
  Image,
  DivImage,
  Grid,
  StatsName,
  DivTypes,
  Titulo,
  DivTitles,
  Move,
} from './styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import PokeFrontAndBack from '../../components/PokeFrontAndBack/PokeFrontAndBack'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stats from '../../components/Stats'
import PokeTypes from '../../components/PokeTypes/PokeTypes'

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
    <Grid>

      <ImageContainer>
        <Card>
          <PokeFrontAndBack imageFront={pokemon?.sprites?.front_default} imageBack={pokemon?.sprites?.back_default} imageShiny={pokemon?.sprites?.front_shiny}/>
        </Card>
      </ImageContainer>

      <DivTypes>
            {pokemon.types &&
              pokemon.types.map((type) => {
                return <PokeTypes type={type.type.name} />;
              })}
      </DivTypes>

      <StatsContainer>
        <Card>
          <DivTitles>
            <Typography variant='h5' color={'primary'} sx={{fontWeight: 700, fontSize: '24px'}}>Stats</Typography>
          </DivTitles>
          <CardContent>
            {pokemon?.stats?.map((stat) => (
              <div>
              <StatsName key={stat.stat.name}>
                {stat.stat.name.toUpperCase()}:{' '}
              </StatsName>
              <ProgressBar now={valueBar(max(pokemon.stats), stat.base_stat)} label={stat.base_stat} />
              </div>
            ))}
          </CardContent>
        </Card>
      </StatsContainer>
      
      <SkillsContainer>
        <Card>
          <DivTitles>
            <Typography variant='h5' color={'primary'} sx={{fontWeight: 700, fontSize: '24px'}}>Moves</Typography>
          </DivTitles>          <span>
            <Scroll>
              {pokemon.moves?.map((move) => {
                return <Move>{move.move.name}</Move> 
              })}
            </Scroll>
          </span>
        </Card>
      </SkillsContainer>
    </Grid>
  )
}
