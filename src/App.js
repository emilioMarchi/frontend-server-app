import React, {Routes , Route} from 'react-router-dom'
import './App.css';

import { useNavigate } from 'react-router-dom';

import Login from './views/Login'
import Products from './views/Products'
import Cart from './views/Cart'
import Index from './views/Index';

function App() {

  const element = () => {
    return handlePage()
  }

  const navigate = useNavigate()

  const handlePage = () => {
    return(navigate('/login'))
  }
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Index />}/>
          <Route path='/registrarse' element={<Login title='Crear usuario' txtBtn='Registrarme' path='logIn'/>} />
          <Route path='/ingresar' element={<Login title='Iniciar sesión' txtBtn='Ingresar' path='signIn'/>} />
          <Route path='/productos' element={<Products/>} />
          <Route path='/carrito' element={<Cart />}/>
        </Routes>
    </div>
  );
}

export default App;
