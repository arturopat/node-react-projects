const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// TODO se exporta el esquema, nombre del esquema "storage"
module.exports = mongoose.model("storage", StorageSchema);
