import './App.css';
import Header from './components/header';
import Conocome from './pages/conoceme';
import Contactame from './pages/contactame';
import Proyectos from './pages/proyectos';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import ThemeProvider from  '../src/theming/theme-provider';
import { Stack } from '@mui/material';




function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}




ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};




function App(props) {
  return (
  <ThemeProvider >   
  
  {/* <Stack sx={{ bgcolor: 'primary.main' }}> */}
  <Stack sx={{ height:'100%'  }}>
          <BrowserRouter>

                <CssBaseline />

                <ElevationScroll {...props}>  

                    <AppBar>
                          
                          <Header></Header>

                    </AppBar>

                </ElevationScroll>

                <Toolbar />

                {/* <Container sx={{ bgcolor:'secondary.main', height:'100vw' }}> */}
                <Container sx={{  height:'100vw' }}>
                      <Switch>

                            <Route path="/proyectos">
                              <Proyectos></Proyectos>
                            </Route>



                            <Route path="/conoceme">
                              <Conocome></Conocome>
                            </Route>

                            <Route path="/contactame">
                              <Contactame></Contactame>
                            </Route>

                            <Route  exact  path="/">
                              <Proyectos></Proyectos>  
                            </Route> 

                      </Switch> 

                </Container>

          </BrowserRouter> 
  </Stack>



  



  </ThemeProvider > 

 
  );
}

export default App;
