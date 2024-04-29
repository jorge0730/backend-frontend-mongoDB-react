import './App.css';
import ComponenteClienteMostrar from './componentes/componenteClienteMostrar';
import ComponenteClienteAgregar from './componentes/componenteClienteAgregar';
import ComponenteClienteModificar from './componentes/componenteClienteModificar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './componentes/componenteMenu';
import ComponenteProductoMostrar from './componentes/componenteProductoMostrar';
import ComponenteProductoModificar from './componentes/componenteProductoModificar';
import ComponenteProductoAgregar from './componentes/componenteProductoAgregar';
import Footer from './componentes/footer';


function App() {

  return (
    <div className="App">
      <Menu/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComponenteClienteMostrar/>}/>
          <Route path='/agregarCliente' element={<ComponenteClienteAgregar/>}/>
          <Route path='/editarCliente/:id' element={<ComponenteClienteModificar/>}/>
          <Route path='/buscarProducto' element={<ComponenteProductoMostrar/>}/>
          <Route path='/editarProducto/:id' element={<ComponenteProductoModificar/>}/>
          <Route path='/agregarProducto' element={<ComponenteProductoAgregar/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
