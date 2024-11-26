import React, { useState, useEffect } from 'react';
import { getCursosByCategoria } from '../API/cursos';

const ItemListContainer = ({ categoria }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoria) {
      getCursosByCategoria(categoria).then((data) => setItems(data));
    } else {
      setItems([]); 
    }
  }, [categoria]);

  return (
    <div>
      {categoria && <h1>Cursos de {categoria}</h1>}
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <h2>{item.curso}</h2>
            <p>{item.descripcion}</p>
            <p>Profesor: {item.profesor}</p>
            <p>Duración: {item.duracion}</p>
            <p>Costo: ${item.costo}</p>
          </div>
        ))
      ) : (
        categoria && <p>No hay cursos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;