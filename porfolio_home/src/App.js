

import './App.css';
import Header from './components/header';
import Conocome from './pages/conoceme';
import Contactame from './pages/contactame';
import Proyectos from './pages/proyectos';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Header></Header>

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

        <Route path="/">
          <Proyectos></Proyectos>  
        </Route> 

      </Switch>  

    </BrowserRouter>
  );
}

export default App;
