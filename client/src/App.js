import { Route, Switch } from 'react-router';
import './App.css'
//import AddBoton from './components/AddBoton';
import AddDogs from './components/AddDogs';
import Banner from './components/Banner';
import Dogs from './components/Dogs';
import DogsDetail from './components/DogsDetail';
import FooterDogs from './components/FooterDogs';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NavBarDetails from './components/NavBarDetails';
import NavBarFiltros from './components/NavBarFiltros';
// import Order from './components/Order';
// import OrderRaza from './components/OrderRaza';
// import SearchBar from './components/SearchBar';
// import Temperament from './components/Temperament';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dogs/agregar">
           <NavBarDetails/>
           <AddDogs/>
           <FooterDogs/>
        </Route>
        <Route path="/dogs/:id">
           <NavBarDetails/>
           <DogsDetail/>
           <FooterDogs/>
        </Route>
        <Route path="/dogs">
           <NavBar/>
           <NavBarFiltros/>
           <Banner/>
           <Dogs/>
           <FooterDogs/>
        </Route>
        <Route path="/">
           <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
