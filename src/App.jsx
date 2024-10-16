import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Curso React JS</h1>

      <Button text = "Contador:" color="red"/> 


    </>
  )
}

export default App
