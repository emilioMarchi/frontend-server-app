import React, {Routes , Route} from 'react-router-dom'
import './App.css';

import Login from './views/Login'
import Products from './views/Products'
import Cart from './views/Cart'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/login' element={<Login/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
    </div>
  );
}

export default App;
