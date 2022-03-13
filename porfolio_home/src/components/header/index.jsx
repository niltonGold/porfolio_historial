import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import './style.css';





import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import SwichtButton from '../../switchChangeTheme';


const preventDefault = (event) => event.preventDefault();

export default function Header(){




    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };






    // const [value, setValue] = React.useState(0);







    const pages = ['Proyectos', 'Conoceme', 'Contactame'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


    const [ toggleState, upDateToggleState ] = useState ('proyectos');

    const [ toggleStateL, upDateToggleStateL ] = useState ('');

    const [ proyectos, setProyectos ] = useState(true);

    const [ conoceme, setConoceme ] = useState(false);

    const [ contactame, setContactame ] = useState(false);

        const [anchorElNav, setAnchorElNav] = React.useState(null);
        const [anchorElUser, setAnchorElUser] = React.useState(null);
      
        const handleOpenNavMenu = (event) => {
           setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event) => {
          setAnchorElUser(event.currentTarget);
        };
      
        const handleCloseNavMenu = (btn) => {
        //   setAnchorElNav(null); 
        //   console.log(btn.target.id);

        //   if ( btn.target.id === '' ) { 
        //     console.log('vacio');
        //   }else { 
          setAnchorElNav(null); 
        //   upDateToggleState(btn.target.id);  
          
          

            //         if ( toggleState === 'proyectos' ){
            //             setProyectos(true);
            //             setConoceme(false);
            //             setContactame(false);
            //         }


            //         if ( toggleState === 'conoceme' ){
            //             setProyectos(false);
            //             setConoceme(true);
            //             setContactame(false);
            //         }


            //         if ( toggleState === 'contactame' ){
            //             setProyectos(false);
            //             setConoceme(false);
            //             setContactame(true);
            //         }

            // }

        };
      


        const handleCloseUserMenu = () => {
          setAnchorElUser(null);
        };



        function toggleTab(tabSeleccionado){
            upDateToggleState(tabSeleccionado);
            console.log(toggleState);
        }





        const handelLink = (e) => {
            console.log('hola link');
            console.log(e.target.id);

            let destinoLink = e.target.id;

            if ( destinoLink === 'proyectos' ){
                upDateToggleStateL(destinoLink);
                upDateToggleState(destinoLink);
            }

            if ( destinoLink === 'conoceme' ){
                upDateToggleStateL(destinoLink);
                upDateToggleState(destinoLink);
            }

            if ( destinoLink === 'contactame' ){
                upDateToggleStateL(destinoLink);
                upDateToggleState(destinoLink);
            }
        

        }



    return(
        <AppBar position="static">
            <Container maxWidth="xl">
            
                    <Toolbar disableGutters>

                            <SwichtButton></SwichtButton>
                            {/* <Typography  variant="h6"  noWrap  component="div"  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} > */}
                            <Typography  variant="h6"  noWrap  component="div"  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                                
                                Nilton Medina Porfolio
                                    
                            </Typography>


                            <Typography  variant="h6"  noWrap  component="div"  sx={{  justifyContent: 'center', flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                                <div> Nilton Medina Porfolio</div>
                            </Typography>
                            

                            <Box sx={{ justifyContent: 'flex-end',  flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            

                                    <Stack spacing={1.5} direction="row">

                                        <Link style={{ textDecoration: 'none' }} to='proyectos'>
                                            <Button variant="contained" onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                               
                                                {/* <div className={ toggleState === 'proyectos' ? 'tab-activate' : 'tab-desactivate' } onClick={ () => toggleTab('proyectos') }>Proyectos</div> */}
                                                <div id='proyectos'>Proyectos</div>
                                                
                                            </Button>
                                        </Link>    
                                        


                                       
                                        <Link style={{ textDecoration: 'none' }} to='conoceme'>
                                            <Button variant="contained"   onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                                {/* <div className={ toggleState === 'conoceme' ? 'tab-activate' : 'tab-desactivate' } onClick={ () => toggleTab('conoceme')} >Conoceme</div> */}
                                                <div id='conoceme'>Conoceme</div>
                                                
                                            </Button>
                                        </Link>
                                       

                                        

                                        <Link style={{ textDecoration: 'none' }} to='contactame'>     
                                            <Button variant="contained"  onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                                {/* <div className={ toggleState === 'contactame' ? 'tab-activate' : 'tab-desactivate' } onClick={ () => toggleTab('contactame')}  >Contactame</div> */}
                                                <div id='contactame'>Contactame</div>
                                            </Button>
                                        </Link>  

                                    </Stack>

                            </Box>   
                                   
                                        
                            


                            {/*  Menu Hamburguesa  */}
                            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>

                                        <IconButton  size="large"  aria-label="account of current user"  aria-controls="menu-appbar"  aria-haspopup="true"  onClick={handleOpenNavMenu}  color="inherit" >
                                            <MenuIcon />
                                        </IconButton>

                                        <Menu  id="menu-appbar"  anchorEl={anchorElNav}  anchorOrigin={{  vertical: 'bottom',  horizontal: 'left', }}  keepMounted  transformOrigin={{  vertical: 'top',  horizontal: 'left',  }}  open={Boolean(anchorElNav)}  onClose={handleCloseNavMenu}  sx={{  display: { xs: 'block', md: 'none' },  }} >
                                            
                                            <Stack className='pagina_mesas_btnGroup' spacing={-2} direction="column">

                                                <Link style={{ textDecoration: 'none' }} to="proyectos">
                                                    <Button variant="contained"  onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                                        <div>Proyectos</div>
                                                    </Button>
                                                </Link>
                                                
                                                <Link style={{ textDecoration: 'none' }} to="conoceme">
                                                    <Button variant="contained" onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                                        <div>Conoceme</div>
                                                    </Button>
                                                </Link>

                                                <Link style={{ textDecoration: 'none' }} to="contactame">
                                                    <Button variant="contained" onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                                        <div>Contactame</div>
                                                    </Button>
                                                </Link>

                                            </Stack>    

                                        </Menu>

                            </Box>

                    </Toolbar>
            </Container>
        </AppBar>
    )
}