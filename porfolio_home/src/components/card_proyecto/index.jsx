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

                        <Card sx={{ borderRadius:'25px', width:'80%', justifySelf:'center', justifyContent:'center' }}>

                              <div className='card-container-carrusel-description-link'>


                                          <Typography sx={{ mb:'0.01rem', mt:'1rem', textAlign:'center', display:{ xs:'visibility', sm:'none' }, fontSize:{ xs:'medium', md:'x-large' }  }} gutterBottom variant="h5" component="div">
                                                {props.cardTitle}
                                          </Typography>


                                          <Stack sx={{ alignSelf:'center', width:'80%' }} >

                                                    <SwipeableTextMobileStepper
                                                            label_1 = {props.label_1}
                                                            imagen_1 = {props.imagen_1}

                                                            label_2 = {props.label_2}
                                                            imagen_2 = {props.imagen_2}

                                                            label_3 = {props.label_3}
                                                            imagen_3 = {props.imagen_3} >
                                                    </SwipeableTextMobileStepper>

                                          </Stack>

                                          {/* <div className='card-container-description-link'> */}
                                          <Stack sx={{ width:'80%', alignSelf:{ xs:'center', sm:'flex-start' } }}>
                                          
                                                      {/* <CardContent sx={{pt:'0.001rem', backgroundColor:'red' }}>   */}
                                                      <CardContent sx={{pt:{ xs:'0.001rem', sm:'1rem' } }}>
                                                            {/* <Stack sx={{ backgroundColor: 'yellow', width:'100%', wordBreak:'break-all' }}> */}
                                                                  <Typography sx={{ textDecoration:'underline', fontWeight:'bold' }} gutterBottom variant="h5" component="div">
                                                                        <div className='titulo-descripcion'>{props.cardTitle}</div>
                                                                  </Typography>

                                                                  <Typography variant="body2" color="text.secondary">
                                                                        <Stack sx={{ gap:'0.5rem' }}>

                                                                              <div> {props.cardLineInfo} </div>
                                                                             
                                                                        </Stack>
                                                                  </Typography>
                                                            {/* </Stack> */}

                                                      </CardContent>


                                                      <div className='link_clip'> 

                                                            

                                                            <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={props.linkProyect}>
                                                            {/* <Button sx={{ ":hover":{ backgroundColor:'primary.dark' } }} > */}
                                                            <Button sx={{ ":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:'2rem', mb:'1rem'    }} >
                                                                  {/* <Typography  sx={{ color:'primary.main', textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }  }}> */}
                                                                  <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 
                                                                                Enlace Al Proyecto
                                                                          
                                                                  {/* </Typography> */}
                                                            </Button>
                                                            </a>

                                                      </div>
                                          
                                          </Stack>
                                          {/* </div> */}
                              </div>
                        </Card>

            </Stack>

      </React.Fragment>
  );
}