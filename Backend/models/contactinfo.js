const mongoose = require("mongoose");

const contactInfo = mongoose.model("contactInfo", {
  name: {
    type: String
  },
  email: {
    type: String
  },
  zip: {
    type: Number
  }
});

module.exports = { contactInfo };
