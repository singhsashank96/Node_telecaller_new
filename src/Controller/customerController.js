const express = require("express");
const customerController = express.Router();
const Customer = require("../Model/customerSchema");
const customerServices = require("../Services/customerServices");
const { sendResponse } = require("../Utlis/common");
const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');



customerController.post("/getAssignedCustomer", async (req, res) => {
  try {
    const { assign_to } = req.body;
    // Query the database for customers assigned to the specified user ID
    const assignedCustomers = await customerServices.customer({ assign_to })
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "Assigned user customer data retrieve successfully",
      userData: assignedCustomers
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving customer data"
    });
  }
});


customerController.post("/getAssignedCustomerCount", async (req, res) => {
  try {

    // Parse the user ID from the request body
    const assign_to = parseInt(req.body.assign_to);
    const assignedCustomers = await customerServices.count({ assign_to })
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "Assigned user customer data count retrieve successfully",
      userData: assignedCustomers
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving count "
    });
  }
});


customerController.get("/getCustomers", async (req, res) => {
  try {

    const assignedCustomers = await customerServices.allcustomer()
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "All  customer data retrieve successfully",
      userData: assignedCustomers
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while retrieving all customer data "
    });
  }
});


customerController.post("/submit-feedback", async (req, res) => {
  try {
    const { customername, taskTitle, feedback, submittedby_username, remark, submittedby_userId } = req.body;
    if (!customername || !taskTitle || !feedback|| !submittedby_username || !remark ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const submittedFeedback = await customerServices.submitFeedback({ customername, taskTitle, feedback, submittedby_username, remark, submittedby_userId })
    sendResponse(res, 200, "Success", {
      message: "Feedback submitted successfully",
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while submitting feedback "
    });
  }
});


customerController.get("/sample-count", async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) {
      return res.status(400).json({ error: 'Missing user_id parameter' });
    }
    const sampleCounts = await customerServices.getSampleCount({user_id})
    sendResponse(res, 200, "Success", {
      message: "Sample count for user_id:- " + user_id + " with tilesName retrieved successfully",
      TotalCount: sampleCounts[0].row_count
    });
  } catch (error) {
    // Handle errors
    console.error('Error retrieving sample counts:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error retrieving sample counts"
    });
  }
});


module.exports = customerController;
