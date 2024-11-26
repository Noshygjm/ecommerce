import React, { useState, useEffect } from 'react';
import { getCursos } from '../API/cursos';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCursos().then((data) => setItems(data));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.curso}</h2>
          <p>{item.descripcion}</p>
          <p>Profesor: {item.profesor}</p>
          <p>Duración: {item.duracion}</p>
          <p>Costo: ${item.costo}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;