import React, { useState } from "react";
import PersonList from "./components/PersonList";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos del formulario al servidor (API)
    // Aquí puedes usar fetch() o cualquier otra librería de manejo de HTTP

    const formData = {
      name,
      age,
    };

    // Ejemplo usando fetch()
    fetch("http://localhost:3000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Aquí puedes manejar la respuesta del servidor
        // Puedes mostrar un mensaje de éxito, limpiar el formulario, etc.
      })
      .catch((error) => {
        console.error("Error:", error);
        // Aquí puedes manejar el error en caso de que falle la solicitud
      });
  };

  return (
    <div>
      <h1>Agregar Persona</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Agregar</button>
      </form>
      <PersonList />
    </div>
  );
}

export default App;
