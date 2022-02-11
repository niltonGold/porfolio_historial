import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tetris from '../../../images/tetris.jpg';

import InsertLinkIcon from '@mui/icons-material/InsertLink';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './style.css';


export default function CardTetris() {
  return (

        <Card sx={{ maxWidth: 300 }}>

              <CardMedia  component="img"  alt="green iguana"  height="250"  image={tetris}  />


              <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                          Tetris
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
              </CardContent>


              <CardActions className='container_links'>
                    <div className='link_clip'> 
                        <InsertLinkIcon></InsertLinkIcon> 
                        <Button size="small">Enlace</Button>
                    </div>
                    
                    <div className='link_points'>
                        <MoreHorizIcon></MoreHorizIcon>
                        <Button size="small">Saber Mas</Button>
                    </div>
              </CardActions>

        </Card>

  );
}