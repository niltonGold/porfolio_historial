import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import InsertLinkIcon from '@mui/icons-material/InsertLink';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import './style.css';
import SwipeableTextMobileStepper from '../carousel_effect_tetris';







import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';
import { bgcolor, fontSize } from '@mui/system';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};








export default function CardTetris() {




      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);






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
                              Tetris
                        </Typography>

                        <Typography sx={{fontSize:{ xs:'small', md:'large' }  }} variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                  </CardContent>


                  {/* <CardActions className='container_links'> */}

                        <div className='link_clip'> 
                              <InsertLinkIcon></InsertLinkIcon> 
                              <Button><Typography  sx={{ textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }  }}>Enlace Al Proyecto</Typography></Button>
                        </div>
                        
                        {/* <div className='link_points'>

                                    <MoreHorizIcon></MoreHorizIcon>

                                    <div>
                                          <Button onClick={handleOpen} size="small">  Saber Mas  </Button>

                                          <Modal  keepMounted  open={open}  onClose={handleClose}  aria-labelledby="keep-mounted-modal-title"  aria-describedby="keep-mounted-modal-description" >
                                                      <Box sx={style}>
                                                                  <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                                                        Text in a modal
                                                                  </Typography>
                                                                  
                                                                  <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                                                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                                  </Typography>

                                                                  <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                                                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                                  </Typography>

                                                                  <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                                                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                                  </Typography>

                                                                  <Button onClick={handleClose}>cerrar</Button>
                                                      </Box>
                                          </Modal>
                                    </div>

                        </div> */}
                  {/* </CardActions>  */}
                  </div>
                  </div>
                  </Card>
            </Stack>

      </React.Fragment>
  );
}