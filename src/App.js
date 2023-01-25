
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Seccion1 from './components/Seccion1';


function App() {
  return (
    <>
    <NavBar />
    <Seccion1 />
    <ItemListContainer greeting="Destacados"/>
    </>
  );
}

export default App;
