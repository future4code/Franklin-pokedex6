import * as React from 'react'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardImage, CardStyled, Actions } from './styles'
import { usePokemon } from '../../hooks/PokemonProvider'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function PokeCard(props) {
  const navigate = useNavigate()
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

  const [isVisible, setVisible] = useState(true)
  const { savePokemon, removePokemon } = usePokemon()
  // const [originalId, setOriginalId] = useState(0)
  const renderImage = () => {
    if (props?.page === 'labedex') {
      if (props?.originalId !== undefined) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          Number(props?.originalId) + 1
        }.png`
      }
    } else {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        props?.id + 1 + props?.offset
      }.png`
    }
  }

  const renderID = () => {
    if (props.page === 'labedex') {
      return Number(props.originalId) + 1
    } else {
      return props.id + 1 + props.offset
    }
  }
  if (isVisible === true) {
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
                  setVisible(false)
                }}
              >
                Remover
              </Button>
            ) : (
              <Button
                size='small'
                onClick={() => {
                  savePokemon({
                    ...props,
                    image,
                    originalId: props.id + props.offset,
                  })
                }}
              >
                Adicionar
              </Button>
            )}
            <Button
              size='small'
              onClick={() => {
                navigate(`details/${props.name}`)
              }}
            >
              Detalhes
            </Button>
          </CardActions>
        </Actions>
      </CardStyled>
    )
  }
}
