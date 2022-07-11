import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useRequestData from '../../hooks/useRequestData';
import axios from 'axios';
import { CardImage, CardStyled, DivImage, DivTypes, TypographyStyled } from './styles';
import PokeTypes from '../PokeTypes/PokeTypes';
import { typeColors } from '../../constants/colors'

export default function PokeCard(props) {
    const image = useRequestData({}, props.image)
    const [pokemonProibido, setPokemonProibido] = useState([])
    // if(image.sprites){
    //     props.isLoading(false)
    //     console.log(image.sprites)
    // }else{
    //     props.isLoading(true)
    // }
    // const isProibido = (id) => {
    //   if(pokemonProibido.includes)
    // }

    const addInDex = (id) => {
      setPokemonProibido([...pokemonProibido, id])
      console.log(pokemonProibido)
    }
  return (
    <>
    {image.types && !pokemonProibido.includes(image.id) &&
     <CardStyled sx={{ maxWidth: 345 }}>
       
      <DivImage url={image.sprites && image.sprites.other.home.front_default} typeColor={typeColors[image.types[0].type.name]}>
       {/* <CardImage
        component="img"
        // image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id + 1 + props.offset}.png`}
        image={image.sprites && image.sprites.other.home.front_default}
      /> */}
      </DivImage>
      <DivTypes>
        {image.types && image.types.map((type) => {return <PokeTypes type={type.type.name} />})}
      </DivTypes>
      <CardContent>
        <TypographyStyled color={'primary'} gutterBottom variant="h5" component="div">
          {props.name.toUpperCase()}
          {" #"}
          {image && image.id}
          {/* {` - #${props.id + 1 + props.offset}`} */}
        </TypographyStyled>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addInDex(image.id)}>Adicionar na dex</Button>
        <Button size="small">Ver Detalhes</Button>
      </CardActions>
    </CardStyled>}
    </>
  );
}
