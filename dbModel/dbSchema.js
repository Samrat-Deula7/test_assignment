const mongoose = require("mongoose");
const { Schema } = mongoose;

const PruductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  Availability: {
    type: Boolean,
    required: true,
  },
 priceMin: {
    type: Number,
    min: 0
  },
  priceMax: {
    type: Number,
    max: 1000000
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("product", PruductsSchema);

module.exports = Product;
