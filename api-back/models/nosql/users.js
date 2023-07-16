const mongoose = require("mongoose");
const mongoseDelete = require("mongoose-delete");
const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// TODO se exporta el esquema, nombre del esquema "users"
UserScheme.plugin(mongoseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("users", UserScheme);
