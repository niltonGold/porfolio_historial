import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import './style.css';
import SwichtButton from '../../switchChangeTheme';
import logoPorfolio from '../imagenes/logoPorfolio.png'




export default function Header(){


        const [anchorElNav, setAnchorElNav] = React.useState(null);
       
      
        const handleOpenNavMenu = (event) => {
           setAnchorElNav(event.currentTarget);
        };

      
        const handleCloseNavMenu = () => {
          setAnchorElNav(null); 
        };
      


    return(
        <AppBar position="static">
            <Container maxWidth="xl">
            
                    <Toolbar disableGutters>

                            <img className='logoPorfolio' src={logoPorfolio}></img>

                            <SwichtButton></SwichtButton>
                            

                            {/* <Typography  variant="h6"  noWrap  component="div"  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                                
                                Nilton Medina Porfolio
                                    
                            </Typography> */}

{/* 
                            <Typography  variant="h6"  noWrap  component="div"  sx={{  justifyContent: 'center', flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                                <div> Nilton Medina Porfolio</div>
                            </Typography> */}
                            

                            <Box sx={{ justifyContent: 'flex-end',  flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                            

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
                            <Box sx={{ justifyContent: 'flex-end', width:'100%', flexGrow: 0, display: { xs: 'flex', sm: 'none' } }}>

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