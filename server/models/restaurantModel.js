const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  address: {
    building: {
      type: String,
    },
    coord: {
      type: Array,
    },
    street: {
      type: String,
    },
    zipcode: {
      type: String,
    },
  },
  borough: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  name: {
    type: String,
  },
  restaurant_id: {
    type: String,
  },
});

module.exports = mongoose.model("restaurants", restaurantSchema);
