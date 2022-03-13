

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './style.css';
import twiter from '../../images/Twiter.png';
import Instagram from '../../images/Instagram.png';
import Outlook from '../../images/Outlook.jpg';
import Stack from '@mui/material/Stack';


export default function Contactame(){

    return(
        <Stack sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor:'secondary.main'}}>
        {/* <div className='mainBoxContactame'> */}
            <div className='contactame-title' >CONTACTAME</div>
            <div className='box1Contactame'>

                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                            <ListItem>
                               
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={twiter} />
                                    </ListItemAvatar>
                                    
                                    <ListItemText secondary={
                                                <React.Fragment>
                                                    <Typography  sx={{ display: 'inline' }}  component="span"  variant="body1"  color="text.primary"  >
                                                        Ali Connors
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                    />
                                  

                            </ListItem>

                                <Divider variant="inset" component="li" />

                            <ListItem>

                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={Instagram} />
                                    </ListItemAvatar>

                                    <ListItemText secondary={
                                                <React.Fragment>
                                                    <Typography  sx={{ display: 'inline' }}  component="span"  variant="body1"  color="text.primary"  >
                                                        Ali Connors
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                    />

                            </ListItem>

                                <Divider variant="inset" component="li" />


                            <ListItem>

                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={Outlook} />
                                    </ListItemAvatar>

                                    <ListItemText secondary={
                                                <React.Fragment>
                                                    <Typography  sx={{ display: 'inline' }}  component="span"  variant="body1"  color="text.primary"  >
                                                        Ali Connors
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                    />

                            </ListItem>

                </List>

            </div>

        {/* </div> */}
        </Stack>
    );
}