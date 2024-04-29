import React from "react";
import '../componentes/menu.css'

document.addEventListener("DOMContentLoaded", () => {
  
  const activePage = window.location.pathname;
  document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
      console.log(link);
    }
  })
});
const Menu = ()=>{

return(
    <div>
      <nav>
      <ul className="nav justify-content-center nav-tabs">
        <li className="nav-item ">
          <a  className="nav-link" aria-current="page" href="/">Mostrar clientes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/buscarProducto">Mostrar productos</a>
        </li>
      </ul>
      </nav>
        
    </div>
 )
    
}


export default Menu;