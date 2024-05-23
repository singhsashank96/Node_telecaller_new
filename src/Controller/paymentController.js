const express = require("express");
const paymentController = express.Router();
const Booking = require("../Model/bookingSchema");
const paymentServices = require("../Services/paymentServices");
const { sendResponse } = require("../Utlis/common");
const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');




paymentController.post("/getpendingsamples", async (req, res) => {
  try {
    const { user_id } = req.body;
    const bookings = await paymentServices.getPendingSamples(user_id)
    // Return the matching customers as the API response
    if (bookings.length === 0) {
      // If no bookings found for the user ID, send a different response message
      sendResponse(res, 200, "Success", {
        message: "No pending samples found for the provided user ID",
        userData: []
      });
    } else {
      // Return the matching bookings as the API response
      sendResponse(res, 200, "Success", {
        message: "Pending samples retrieved successfully",
        userData: bookings
      });
    }
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving all customer data "
    });
  }
});

paymentController.post("/getdeliveredsamples", async (req, res) => {
  try {
    const { user_id } = req.body;
    const deliveredSamples = await paymentServices.getDeliveredSamples(user_id)
    if (deliveredSamples.length === 0) {
      // If no delivered samples found for the user ID, send a different response message
      sendResponse(res, 200, "Success", {
        message: "No delivered samples found for the provided user ID",
        userData: []
      });
    } else {
      // Return the matching delivered samples as the API response
      sendResponse(res, 200, "Success", {
        message: "Delivered samples retrieved successfully",
        userData: deliveredSamples
      });
    }
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving all customer data "
    });
  }
});

module.exports = paymentController;
