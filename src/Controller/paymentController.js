const express = require("express");
const paymentController = express.Router();
const Booking = require("../Model/bookingSchema");
const paymentServices = require("../Services/paymentServices");
const { sendResponse } = require("../Utlis/common");
const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');




paymentController.get("/getpendingsamples", async (req, res) => {
  try {
    const { user_id } = req.body;
    const bookings = await paymentServices.getPendingSamples(user_id)
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "Pending samples retrieve successfully",
      userData: bookings
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving all customer data "
    });
  }
});

paymentController.get("/getdeliveredsamples", async (req, res) => {
  try {
    const { user_id } = req.body;
    const deliveredSamples = await paymentServices.getDeliveredSamples(user_id)
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "Delivered samples retrieve successfully",
      userData: deliveredSamples
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving all customer data "
    });
  }
});

module.exports = paymentController;
