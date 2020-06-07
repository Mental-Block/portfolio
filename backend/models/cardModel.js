const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  githubURL: { type: String, required: true },
  netlifyURL: { type: String, required: true },
  featured: { type: Boolean },
});

module.exports = Card = mongoose.model("card", cardSchema);
