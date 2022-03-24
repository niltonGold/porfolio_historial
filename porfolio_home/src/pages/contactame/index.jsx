import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './style.css';
// import twiter from '../../images/Twiter.png';
// import Instagram from '../../images/Instagram.png';
// import Outlook from '../../images/Outlook.jpg';
import Stack from '@mui/material/Stack';
import contactameImagen from '../../components/imagenes/proyecto_porfoliohome/contactame.png'

export default function Contactame(){

    return(
        <Stack sx={{ gap:'1rem', pt:'2rem', pb:'2rem' }}>
            <Stack sx={{ alignItems:'center', borderRadius:'25px', bgcolor:'secondary.main', pt:'1rem', pb:'1rem' }} > 

                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' }, alignItems:'center', gap:'1rem' }} >
                    <Typography sx={{ fontWeight:'bold', fontSize:'xx-large' }} >CONTACTAME</Typography>
                    <Avatar sx={{ width:'7rem', height:'7rem' }} alt="Remy Sharp" src={contactameImagen}></Avatar>
                </Stack>


                <Stack sx={{ textAlign: 'justify', width:'60%', fontSize:{ xs:'small', sm:'x-large' } }} >Puedes ponerte en contacto conmigo a través de cualquiera de mis siguientes redes sociales</Stack>
                      
                <Stack sx={{ fontSize:'3rem' }} >👇</Stack>

            </Stack>    

                <div className='box1Contactame'>

                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                                <ListItem>
                                
                                        {/* <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={twiter} />
                                        </ListItemAvatar> */}
                                        
                                        <ListItemText secondary={

                                                    <React.Fragment>
                                                        <Typography  sx={{ display: 'inline' }}  component="span"  variant="body1"  color="text.primary"  >
                                                            Ali Connors
                                                        </Typography>
                                                    </React.Fragment> }/>
                                    
                                </ListItem>


                                    <Divider variant="inset" component="li" />


                                <ListItem>

                                        {/* <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={Instagram} />
                                        </ListItemAvatar> */}

                                        <ListItemText secondary={
                                                    <React.Fragment>
                                                        <Typography  sx={{ display: 'inline' }}  component="span"  variant="body1"  color="text.primary"  >
                                                            Ali Connors
                                                        </Typography>
                                                    </React.Fragment> }/>

                                </ListItem>


                                    <Divider variant="inset" component="li" />


                                <ListItem>

                                        {/* <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={Outlook} />
                                        </ListItemAvatar> */}

                                        <ListItemText secondary={
                                                    <React.Fragment>
                                                        <Typography  sx={{ display: 'inline' }}  component="span"  variant="body1"  color="text.primary"  >
                                                            Ali Connors
                                                        </Typography>
                                                    </React.Fragment> }/>

                                </ListItem>

                    </List>

                </div>

        </Stack>

    );
}