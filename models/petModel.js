const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  personality: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  adopted: { type: Boolean, default: false },
  adoption_date: { type: Date },
});

module.exports = mongoose.model("Pet", PetSchema);
