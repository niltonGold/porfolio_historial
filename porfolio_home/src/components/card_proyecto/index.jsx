import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import './style.css';
import SwipeableTextMobileStepper from '../../components/carousel_effect';
import { Stack } from '@mui/material';




export default function CardProyecto(props) {


  return (
      <React.Fragment>

            <Stack sx={{ alignItems:'center', width:'100%'}}> 

                        <Card sx={{width:'80%', justifySelf:'center', justifyContent:'center' }}>

                              <div className='card-container-carrusel-description-link'>


                                          <Typography sx={{ mb:'0.01rem', mt:'1rem', textAlign:'center', display:{ xs:'visibility', sm:'none' }, fontSize:{ xs:'medium', md:'x-large' }  }} gutterBottom variant="h5" component="div">
                                                {props.cardTitle}
                                          </Typography>


                                          <Stack sx={{ alignSelf:'center', width:'100%' }} >

                                                    <SwipeableTextMobileStepper
                                                            label_1 = {props.label_1}
                                                            imagen_1 = {props.imagen_1}

                                                            label_2 = {props.label_2}
                                                            imagen_2 = {props.imagen_2}

                                                            label_3 = {props.label_3}
                                                            imagen_3 = {props.imagen_3} >
                                                    </SwipeableTextMobileStepper>

                                          </Stack>

                                          <div className='card-container-description-link'>

                                                      <CardContent>  

                                                            <Typography gutterBottom variant="h5" component="div">
                                                                  <div className='titulo-descripcion'>{props.cardTitle}</div>
                                                            </Typography>

                                                            <Typography sx={{fontSize:{ xs:'x-small', md:'medium' }  }} variant="body2" color="text.secondary">

                                                                  <div> {props.cardLine1} </div>
                                                                  <div> {props.cardLine2} </div>
                                                                  <div> {props.cardLine3} </div>
                                                                  <div> {props.cardLine4} </div>
                                                                  
                                                            </Typography>

                                                      </CardContent>


                                                      <div className='link_clip'> 

                                                            <InsertLinkIcon></InsertLinkIcon> 

                                                            <a className='enlace_al_proyecto' href={props.linkProyect}>
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