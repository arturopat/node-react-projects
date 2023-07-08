import React, { useState, useEffect } from "react";

function PersonList() {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    // Obtener la lista de personas desde la API
    // Puedes usar fetch() u otra librería de manejo de HTTP

    fetch("http://localhost:3000/api/getAll")
      .then((response) => response.json())
      .then((data) => {
        setPersonList(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Personas</h1>
      <ul>
        {personList.map((person) => (
          <li key={person._id}>
            Nombre: {person.name}, Edad: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
