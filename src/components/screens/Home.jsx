import React from "react";
import TituloH1 from "../Titulos/TituloH1";

const Home = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <TituloH1 h1="Bienvenidos a los mejores Cursos" />
    
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Estamos emocionados de acompañarte en este viaje de aprendizaje. Explora los cursos, selecciona las categorías que te interesan, y mejora tus habilidades en tecnología.
      </p>

      <p style={{ fontSize: "16px", marginTop: "10px" }}>
        ¿Listo para empezar? Haz clic en <strong>Cursos</strong> en el menú para explorar nuestras opciones.
      </p>
    </div>
  );
};

export default Home;