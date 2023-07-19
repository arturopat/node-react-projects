const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

// ! 3:08:56

/** Obtener lista de la base de datos */
const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await tracksModel.find({});

    res.send({ data, user });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

/** Obtener un detalle */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send(data);
  } catch (error) {
    handleHttpError(req, "error_get_item");
  }
};

/** insertar un registro */
const createItems = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GENERANDO_ITEMS");
  }
};

/** actualizar lista de la base de datos */
const updateItems = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_update_items");
  }
};

/** eliminar lista de la base de datos */
const deleteItems = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.delete({ _id: id });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_delete_item");
  }
};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
