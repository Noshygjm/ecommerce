import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import TituloH1 from './components/Titulos/TituloH1'



function App() {
  return (
    <>

      <NavBar/>

      <TituloH1 h1="Mil y una formas de aprender" />

      <ItemListContainer mensaje="Bienvenidos a tu proxima capacitación"/>

    </>
  )
}

export default App
