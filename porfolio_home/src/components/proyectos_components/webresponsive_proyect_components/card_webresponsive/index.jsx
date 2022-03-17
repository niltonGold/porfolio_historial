import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import './style.css';
import SwipeableTextMobileStepper from '../carousel_effect_webresponsive';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';



export default function CardWebResponsiveAnimada() {

    const linkto = 'https://webresponsiveanimada.herokuapp.com/';

  return (
      <React.Fragment>

            <Stack sx={{ alignItems:'center', width:'100%'}}> 

                        <Card sx={{width:'80%', justifySelf:'center', justifyContent:'center' }}>

                              <div className='card-container-carrusel-description-link'>

                                          <Stack sx={{ width:'100%' }} >      
                                                      <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
                                          </Stack>

                                          <div className='card-container-description-link'>

                                                      <CardContent>  

                                                            <Typography sx={{  fontSize:{ xs:'medium', md:'x-large' }  }} gutterBottom variant="h5" component="div">
                                                                  WebResponsiveAnimada
                                                            </Typography>

                                                            <Typography sx={{fontSize:{ xs:'small', md:'large' }  }} variant="body2" color="text.secondary">

                                                                  <div>Lizards are a widespread group of squamate reptiles, with over 6,000</div>
                                                                  <div>species, ranging across all continents except Antarctica</div>

                                                            </Typography>

                                                      </CardContent>


                                                      <div className='link_clip'> 

                                                            <InsertLinkIcon></InsertLinkIcon> 

                                                            <a className='enlace_al_proyecto' href={linkto}>
                                                            <Button>
                                                                  <Typography  sx={{ textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }  }}>
                                                                        
                                                                                Enlace Al Proyecto
                                                                          
                                                                  </Typography>
                                                            </Button>
                                                            </a>

                                                      </div>
                                                
                                          
                                          </div>
                              </div>
                        </Card>

            </Stack>

      </React.Fragment>
  );
}