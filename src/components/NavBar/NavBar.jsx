import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cursos } from "../API/cursos"; 
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const NavBar = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Obtener las categorías únicas del array de cursos
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <Logo />
          <li><Link to="/home">Home</Link></li>
          
          <li className="dropdown">
            <a href="#Cursos">Cursos</a>
            <ul className="dropdown-menu">
              {categorias.map((categoria) => (
                <li key={categoria}>
                  <a href="#!" onClick={() => handleCategoriaClick(categoria)}>
                    {categoria}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <CartWidget cantidad={0} />
      </nav>

      {/* Muestra los cursos de la categoría seleccionada */}
      <ItemListContainer categoria={categoriaSeleccionada} />
    </>
  );
};

export default NavBar;



// import React from 'react'
// import Logo from '../Logo/Logo'
// import CartWidget from '../CartWidget/CartWidget'

// const NavBar = () => {
//   return (
//     <nav className="navbar">
      
//       <ul className="nav-list">
        
//         <Logo/>
        
//         <li><a href="#home">Home</a></li>
//         <li><a href="#Cursos">Cursos</a></li>
//         <li><a href="#Carreras">Carreras</a></li>
//         <li><a href="#Contacto">Contacto</a></li>

//       </ul>

//       <CartWidget cantidad = {0} />

//     </nav>
//   )
// }

// export default NavBar