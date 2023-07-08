const express = require("express");
const routes = require("./routes/routes");
const conectar = require("./db");
const cors = require("cors");
const { connections } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

// conexion a la base de datos
conectar();

// rutas
app.use("/api", routes);

// servidor
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
