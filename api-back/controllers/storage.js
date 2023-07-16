const { matchedData } = require("express-validator");
const fs = require("fs");
const { storageModel } = require("../models");
const { handleError, handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
/** Obtener lista de la base de datos */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});

    res.send(data);
  } catch (e) {
    handleHttpError(res, "Error_list_items");
  }
};

/** Obtener un detalle */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);

    res.send(data);
  } catch (e) {
    handleHttpError(res, "Error_datail_items");
  }
};

/** insertar un registro */
const createItems = async (req, res) => {
  try {
    const { file } = req;

    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "error-create-items");
  }
};

/** actualizar lista de la base de datos */
const updateItems = async (req, res) => {};

/** eliminar lista de la base de datos */
const deleteItems = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const datafile = await storageModel.findById(id);
    await storageModel.deleteOne(id);
    const { filename } = datafile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);
    const data = {
      filePath,
      deleted: 1,
    };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_datail_items");
  }
};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
