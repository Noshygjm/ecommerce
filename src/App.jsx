import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contacto from "./components/screens/Contacto";
import Home from './components/screens/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cursos" element={<ItemListContainer />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
