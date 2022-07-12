import * as React from 'react'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardImage, CardStyled, Actions } from './styles'
import { usePokemon } from '../../hooks/PokemonProvider'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import ShouldRender from './../ShouldRender/index'

export default function PokeCard(props) {
  const navigate = useNavigate()
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

  const [DeleteCardVisible, SetDeleteVisible] = useState(true)
  const [AddCardVisible, SetADDVisible] = useState(true)
  const { savePokemon, removePokemon } = usePokemon()

  const renderImage = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props?.originalId}.png`
  }

  const renderID = () => {
    return Number(props.originalId)
  }

  if (DeleteCardVisible === true && AddCardVisible === true) {
    return (
      <CardStyled sx={{ maxWidth: 345 }}>
        <CardImage component='img' height='max-content' image={renderImage()} />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            color={'primary'}
          >
            {props.name?.toUpperCase()}
            {` - #${renderID()}`}
          </Typography>
        </CardContent>
        <Actions>
          <CardActions>
            {props.isDelete ? (
              <Button
                size='small'
                onClick={() => {
                  removePokemon(props.name)
                  SetDeleteVisible(false)
                }}
              >
                Remover
              </Button>
            ) : (
              <Button
                size='small'
                onClick={() => {
                  SetADDVisible(false)
                  savePokemon({
                    ...props,
                    image,
                    originalId: props.originalId,
                  })
                }}
              >
                Adicionar a Dex
              </Button>
            )}
            <ShouldRender if={props.page == 'labedex'}>
              <Button
                size='small'
                onClick={() => {
                  navigate(`/details/${props.name}`)
                }}
              >
                Detalhes
              </Button>
            </ShouldRender>
          </CardActions>
        </Actions>
      </CardStyled>
    )
  }
}
