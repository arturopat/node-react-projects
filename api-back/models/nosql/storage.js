const mongoose = require("mongoose");
const mongoseDelete = require("mongoose-delete");
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
StorageSchema.plugin(mongoseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storage", StorageSchema);
