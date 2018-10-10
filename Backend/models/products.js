var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    minlength: 1
  },
  description: {
    type: String,
    minlength: 1,
    trim: true
  },
  category: {
    type: String,
    minlength: 1,
    trim: true
  },
  availability: {
    type: String,
    minlength: 1,
    trim: true
  },
  productImageurl: {
    type: String
  }
});

var productModel = mongoose.model("Product", productSchema);

module.exports = { productModel };
