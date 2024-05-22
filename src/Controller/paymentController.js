const express = require("express");
const paymentController = express.Router();
const paymentServices = require("../Services/paymentServices");
const { sendResponse } = require("../Utlis/common");
const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');

// POST request for retrieving pending samples
paymentController.post("/getpendingsamples", async (req, res) => {
  try {
    const { user_id } = req.body;
    const bookings = await paymentServices.getPendingSamples(user_id);
    sendResponse(res, 200, "Success", {
      message: "Pending samples retrieved successfully",
      userData: bookings
    });
  } catch (error) {
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving pending samples"
    });
  }
});

// POST request for retrieving delivered samples
paymentController.post("/getdeliveredsamples", async (req, res) => {
  try {
    const { user_id } = req.body;
    const deliveredSamples = await paymentServices.getDeliveredSamples(user_id);
    sendResponse(res, 200, "Success", {
      message: "Delivered samples retrieved successfully",
      userData: deliveredSamples
    });
  } catch (error) {
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving delivered samples"
    });
  }
});

module.exports = paymentController;
