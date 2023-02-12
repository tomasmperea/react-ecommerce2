import './App.css';
import { Navbar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Banner } from './components/Banner';

function App() {

  return (
      <BrowserRouter>
        <div className="App">
            <div>
                <Navbar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path="/products/:typeProduct" element={<ItemListContainer />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                </Routes>
            </div>
        </div>
        <Banner/>
      </BrowserRouter>
      
  );
}

export default App;
