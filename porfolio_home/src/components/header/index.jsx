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

        const [anchorElNav, setAnchorElNav] = React.useState(null);
        const [anchorElUser, setAnchorElUser] = React.useState(null);
      
        const handleOpenNavMenu = (event) => {
          setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event) => {
          setAnchorElUser(event.currentTarget);
        };
      
        const handleCloseNavMenu = () => {
          setAnchorElNav(null);
        //   alert('hola');

          

        };
      
        const handleCloseUserMenu = () => {
          setAnchorElUser(null);
        };




    return(
        <AppBar position="static">
            <Container maxWidth="xl">
            
                    <Toolbar disableGutters>
                    <SwichtButton></SwichtButton>
                            {/* <Typography  variant="h6"  noWrap  component="div"  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} > */}
                            <Typography  variant="h6"  noWrap  component="div"  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                                
                              Nilton Medina
                                    
                            </Typography>


                            <Typography  variant="h6"  noWrap  component="div"  sx={{  justifyContent: 'center', flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                                <div> Nilton Medina </div>
                            </Typography>
                            

                            <Box sx={{ justifyContent: 'flex-end',  flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            

                                    <Stack spacing={1.5} direction="row">


                                    

                                        
                                        <Link style={{ textDecoration: 'none' }} to="proyectos" >
                                            <Button variant="contained" onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                               
                                                <div>Proyectos</div>
                                                
                                            </Button>
                                        </Link>    
                                        


                                       
                                        <Link style={{ textDecoration: 'none' }} to="conoceme">
                                            <Button variant="contained"   onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                                <div>Conoceme</div>
                                            </Button>
                                        </Link>
                                       

                                        

                                        <Link style={{ textDecoration: 'none' }} to="contactame">     
                                            <Button variant="contained"   onClick={handleCloseNavMenu}  sx={{ width:'110px', my: 2, color: 'white', display: 'block' }} >
                                                <div>Contactame</div>
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