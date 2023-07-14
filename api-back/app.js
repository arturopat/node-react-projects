require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/mongo");

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

/**
 * Aqui se invoca a las rutas
 */

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("el servidor esta escuchando en el puerto:", port);
});

dbConnect();
