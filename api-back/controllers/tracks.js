const { tracksModel } = require("../models");

/** Obtener lista de la base de datos */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});

  res.send(data);
};

/** Obtener un detalle */
const getItem = (req, res) => {};

/** insertar un registro */
const createItems = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body);
  res.send({ algo: 1 });
};

/** actualizar lista de la base de datos */
const updateItems = (req, res) => {};

/** eliminar lista de la base de datos */
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
