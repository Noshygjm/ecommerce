import React from "react";
import { cursos } from "../API/cursos"; // Importa el array de cursos o las categorías
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  // Obtener las categorías únicas del array de cursos
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Logo />
        <li><a href="#home">Home</a></li>
        
        <li className="dropdown">
          <a href="#Cursos">Cursos</a>
          <ul className="dropdown-menu">
            {categorias.map((categoria) => (
              <li key={categoria}>
                <a href={`#${categoria}`}>{categoria}</a>
              </li>
            ))}
          </ul>
        </li>

        <li><a href="#Carreras">Carreras</a></li>
        <li><a href="#Contacto">Contacto</a></li>
      </ul>

      <CartWidget cantidad={0} />
    </nav>
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