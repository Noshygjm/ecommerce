import React from 'react'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-list">
        
        <Logo/>
        
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Cursos</a></li>
        <li><a href="#services">Carreras</a></li>
        <li><a href="#contact">Contacto</a></li>

      </ul>

      <CartWidget cantidad = {0} />

    </nav>
  )
}

export default NavBar