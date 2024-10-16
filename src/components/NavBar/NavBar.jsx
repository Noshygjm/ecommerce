import React from 'react'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-list">
        
        <Logo/>
        
        <li><a href="#home">Home</a></li>
        <li><a href="#Cursos">Cursos</a></li>
        <li><a href="#Carreras">Carreras</a></li>
        <li><a href="#Contacto">Contacto</a></li>

      </ul>

      <CartWidget cantidad = {0} />

    </nav>
  )
}

export default NavBar