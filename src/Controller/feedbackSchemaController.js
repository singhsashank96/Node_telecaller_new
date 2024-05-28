const express = require("express");
const feedbackSchemaController = express.Router();
const responseServices = require("../Services/responseServices");
const { sendResponse } = require("../Utlis/common");
const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');


feedbackSchemaController.get("/getFeedbackStrings", async (req, res) => {
  try {
    const status = await responseServices.GetFeedbackStatusString()
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "All Feedback status strings retrieve successfully",
      userData: status
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving Feedback strings "
    });
  }
});

module.exports = feedbackSchemaController;
