import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './style.css';
import Stack from '@mui/material/Stack';
import contactameImagen from '../../components/imagenes/proyecto_porfoliohome/contactame.png';
import imagenPrueba from '../../components/imagenes/proyecto_porfoliohome/shaka.png';

import telefono from '../../components/imagenes/proyecto_porfoliohome/telefono.jpg';
import mail from '../../components/imagenes/proyecto_porfoliohome/mail.jpg';
import linkedin from '../../components/imagenes/proyecto_porfoliohome/linkedin.jpg';



export default function Contactame(){

    return(
        <Stack sx={{ gap:'1rem', pt:'2rem', pb:'2rem' }}>
            <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', pt:'1rem', pb:'1rem' }} > 

                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' }, alignItems:'center', gap:'1rem' }} >
                    <Typography sx={{ fontWeight:'bold', fontSize:'xx-large' }} >CONTACTAME</Typography>
                    <Avatar sx={{ width:'7rem', height:'7rem' }} alt="Remy Sharp" src={contactameImagen}></Avatar>
                </Stack>


                <Stack sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }} >
                    Puedes ponerte en contacto conmigo a través de cualquiera de mis siguientes redes sociales
                </Stack>
                      
                <Stack sx={{ fontSize:'3rem' }} >👇</Stack>

            </Stack> 

            
            {/* --------------------------------------------------------------------------------- */}
            
            
            <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', pt:'1rem', pb:'1rem', justifyContent:'center' }} > 

           
                        <Stack sx={{ gap:'1rem', flexDirection:'row', alignItems:'center', width:'60%', justifyContent:'left' }}>
                        
                            <Avatar sx={{ width:'4rem', height:'4rem' }} alt="Remy Sharp" src={telefono}></Avatar>
                  
                            {/* <Typography  sx={{ display: 'inline', fontSize:{ xs:'small', sm:'x-large' } }} > */}
                            <Typography  sx={{ display: 'inline', fontSize:'x-large' }} >
                                650 347 741
                            </Typography>
                        
                        </Stack>
                      
            </Stack> 


            {/* --------------------------------------------------------------------------------- */}
            
            
            <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', pt:'1rem', pb:'1rem', justifyContent:'center' }} > 

           
                        <Stack sx={{ gap:'1rem', flexDirection:'row', alignItems:'center', width:'60%', justifyContent:'left' }}>
                        
                            <Avatar sx={{ width:'4rem', height:'4rem' }} alt="Remy Sharp" src={mail}></Avatar>
                  
                            {/* <Typography  sx={{ display: 'inline', fontSize:{ xs:'small', sm:'x-large' } }} > */}
                            <Typography  sx={{ wordBreak:'break-all', display: 'inline', fontSize:'x-large' }} >
                                niltonenrique3000@hotmail.com
                            </Typography>
                        
                        </Stack>
                      
            </Stack> 

            {/* --------------------------------------------------------------------------------- */}
            
            
            <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', pt:'1rem', pb:'1rem', justifyContent:'center' }} > 

           
                        <Stack sx={{ gap:'1rem', flexDirection:'row', alignItems:'center', width:'60%', justifyContent:'left' }}>
                        
                            <Avatar sx={{ width:'4rem', height:'4rem' }} alt="Remy Sharp" src={linkedin}></Avatar>
                  
                            {/* <Typography  sx={{ display: 'inline', fontSize:{ xs:'small', sm:'x-large' } }} > */}
                            <Typography  sx={{ display: 'inline', fontSize:'x-large' }} >
                                Nilton Medina Sayan
                            </Typography>
                        
                        </Stack>
                      
            </Stack> 
             
        </Stack>

    );
}