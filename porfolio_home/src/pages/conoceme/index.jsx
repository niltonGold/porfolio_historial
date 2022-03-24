import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './style.css';
import PanToolIcon from '@mui/icons-material/PanTool';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';
import conocemeImagen from '../../components/imagenes/proyecto_porfoliohome/shaka.png'
import Button from '@mui/material/Button';

import pdf from '../../components/documents/curriculumVitae.pdf'



export default function Conocome(){

    return(

        <Stack sx={{ gap:'1rem', pt:'2rem', pb:'2rem' }}>


                    <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', pt:'1rem', pb:'1rem' }} >

                        <Stack sx={{ flexDirection:{ xs:'column', sm:'row' }, alignItems:'center', gap:'1rem' }} >
                            <Typography sx={{ fontWeight:'bold', fontSize:'xx-large' }} >CONOCEME</Typography>
                            <Avatar sx={{ width:'7rem', height:'7rem' }} alt="Remy Sharp" src={conocemeImagen}></Avatar>
                        </Stack> 
                        
                       
                        <Stack sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }} >!Hola soy Nilton Medina Sayan y aqui te comento como soy a nivel un poco mas personal</Stack>
                      
                        <Stack sx={{ fontSize:'3rem' }} >👇</Stack>
                    </Stack>


                {/* --------------------------------------------------------------------------------- */}


                    <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', gap:'1rem', pt:'1rem', pb:'1rem'}} >
                                
                                <Stack sx={{ width:'60%', gap:'1rem', fontWeight: 'bold', flexDirection:'row' }}>
                                    <Stack sx={{ fontSize:'2rem', color:'red' }}> ❤ </Stack>
                                    <Typography sx={{ fontWeight:'bold', alignSelf:'center', fontSize:{ xs:'small', sm:'x-large' } }}>Pasiones</Typography>
                                </Stack>

                            
                                <Box sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }}>
                                        Me apasiona mucho el orden y que las cosas queden muy cuadriculadas, tal y como se muestra en
                                        la página de mi porfolio, para ello utilizo mucho el CSS y el React UI framework MUI.
                                </Box>
                            
                    </Stack>


                {/* --------------------------------------------------------------------------------- */}


                    <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', gap:'1rem', pt:'1rem', pb:'1rem'}} >
                                
                                <Stack sx={{ width:'60%', gap:'1rem', fontWeight: 'bold', flexDirection:'row' }}>
                                    <Stack sx={{ fontSize:'2rem' }}> 🧐 </Stack>
                                    <Typography sx={{ fontWeight:'bold', alignSelf:'center', fontSize:{ xs:'small', sm:'x-large' } }}>Caracteristicas Personales</Typography>
                                </Stack>

                            
                                <Box sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }}>
                                        Soy una persona muy responsable, trabajadora, ordenada y sobre todo muy puntual, la puntualidad es muy importante para mi,
                                        ademas cuando me comprometo a algo no paro hasta que lo termino todo, me gusta mucho buscar constantemente soluciones a los problemas.
                                </Box>
                            
                    </Stack>     


                {/* --------------------------------------------------------------------------------- */}


                    <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', gap:'1rem', pt:'1rem', pb:'1rem'}} >
                                
                                <Stack sx={{ width:'60%', gap:'1rem', fontWeight: 'bold', flexDirection:'row' }}>
                                    <Stack sx={{ fontSize:'2rem' }}> 🖐 </Stack>
                                    <Typography sx={{ fontWeight:'bold', alignSelf:'center', fontSize:{ xs:'small', sm:'x-large' } }}>Habilidades</Typography>
                                </Stack>

                            
                                <Box sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }}>
                                        Mis habilidades funmentales son el Full Stack, es decir el desarrollo web desde el Front-End hasta el Back-End
                                        utilizando para ello HTML, CSS, JavaScript y la libreria REACT, para poder realizar el Full Stack estudié el 
                                        Stack MERN ( MongoDB Express-js React-js Node-js ).
                                </Box>
                            
                    </Stack>  


                {/* --------------------------------------------------------------------------------- */}

                    <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', gap:'1rem', pt:'1rem', pb:'1rem'}} >
                                
                                <Stack sx={{ width:'60%', gap:'1rem', fontWeight: 'bold', flexDirection:'row' }}>
                                    <Stack sx={{ fontSize:'2rem' }}> 👊 </Stack>
                                    <Typography sx={{ fontWeight:'bold', alignSelf:'center', fontSize:{ xs:'small', sm:'x-large' } }}>Otras Habilidades</Typography>
                                </Stack>

                            
                                <Box sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }}>
                                        Ademas de mis conocimientos en Full Stack también tengo otros conocimientos como, conceptos básicos de Java, Pascal, 
                                        administración y gestión de redes, ademas de conocimientos básicos de entornos de sistemas operativos como windows o linux.
                                </Box>
                            
                    </Stack> 


                {/* --------------------------------------------------------------------------------- */}

                    <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', gap:'1rem', pt:'1rem', pb:'1rem'}} >
                                
                                <Stack sx={{ width:'60%', gap:'1rem', fontWeight: 'bold', flexDirection:'row' }}>
                                    <Stack sx={{ fontSize:'2rem' }}> 🤝 </Stack>
                                    <Typography sx={{ fontWeight:'bold', alignSelf:'center', fontSize:{ xs:'small', sm:'x-large' } }}>Adaptabilidad</Typography>
                                </Stack>

                            
                                <Box sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }}>
                                        Me adapto a casi cualquier situación que se me presente, si hace falta revisar la documentación de algún otro código de programación 
                                        ajeno a lo que estudié lo hago sin ningun problema, cualquier cosa nueva de la que me tenga que documentar me lo tomo como un 
                                        reto a superar.
                                </Box>
                            
                    </Stack> 


                {/* --------------------------------------------------------------------------------- */}


                    <Stack sx={{ flexDirection:{ xs:'column', sm:'row' }, justifyContent:'center', alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', gap:'1rem', pt:'1rem', pb:'1rem'}} >

                                <Stack sx={{ fontSize:'3rem', pb:'1rem', display:{ xs:'block', sm:'none' } }}>👇</Stack>

                                <Stack sx={{ fontSize:'3rem', pb:'1rem', display:{ xs:'none', sm:'block' } }}>👉</Stack>

                                <a className='porfolio_link_download' href={pdf} target="_blank" rel="noopener noreferrer" download="CurriculumVitae.pdf">
                                        <Button variant="contained" sx={{ height:'4rem', color:'white', fontSize:'x-large', fontWeight:'bold' }} >          
                                                DESCARGA MI CV                 
                                        </Button>
                                </a>  

                                <Stack sx={{ fontSize:'3rem', pb:'1rem', display:{ xs:'none', sm:'block' } }}>👈</Stack>

                                <Stack sx={{ fontSize:'3rem', pb:'1rem', display:{ xs:'block', sm:'none' } }}>👆</Stack>

                    </Stack> 

        </Stack>
        
    )
}