import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import TituloH1 from './components/Titulos/TituloH1'



function App() {
  return (
    <>

      <NavBar/>

      <main>

      <TituloH1 h1="Mil y una formas de aprender" />

      <ItemListContainer mensaje="Bienvenidos a tu proxima capacitación"/>
      
      </main>

    </>
  )
}

export default App
