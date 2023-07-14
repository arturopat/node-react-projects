const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  //TODO tracks.js [tracks]
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); // TODO users, storage
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`)); // TODO http://locahost:3000/api/traks or storage
    console.log(`la ruta es /${name} con el /${file}`);
  }
});

module.exports = router;
