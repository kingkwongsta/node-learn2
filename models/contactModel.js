const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Need contact name"],
    },
    email: {
      type: String,
      required: [true, "Need contact email"],
    },
    phone: {
      type: String,
      required: [true, "Need contact phone"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
