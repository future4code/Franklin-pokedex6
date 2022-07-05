import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useRequestData from '../../hooks/useRequestData';
import axios from 'axios';
import { CardImage, CardStyled } from './styles';

export default function PokeCard(props) {
    const image = useRequestData({}, props.image)
    
  return (
    <CardStyled sx={{ maxWidth: 345 }}>
      <CardImage
        component="img"
        height="max-content"
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id + 1 + props.offset}.png`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={"primary"}>
          {props.name.toUpperCase()}
          {` - #${props.id + 1 + props.offset}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardStyled>
  );
}
