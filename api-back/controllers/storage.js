const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
/** Obtener lista de la base de datos */
const getItems = async (req, res) => {
  const data = await storageModel.find({});

  res.send(data);
};

/** Obtener un detalle */
const getItem = (req, res) => {};
// !! me quede en el minuto 2:05:15
/** insertar un registro */
const createItems = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
};

/** actualizar lista de la base de datos */
const updateItems = (req, res) => {};

/** eliminar lista de la base de datos */
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
