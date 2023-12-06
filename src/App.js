
import './App.css';

import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './component/pages/home'
import Cart from './component/pages/cart'
import Navbar from './component/navbar';
import {Provider} from 'react-redux';
import Store from './component/store/store'
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
