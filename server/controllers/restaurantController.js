const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
const Restaurant = require("./../models/restaurantModel");

const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find();
  res.status(200).json(restaurants);
});

module.exports = { getRestaurants };
