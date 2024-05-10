const express = require("express");
const customerController = express.Router();
const Customer = require("../Model/customerSchema");
const customerServices = require("../Services/customerServices");
const { sendResponse } = require("../Utlis/common");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');



customerController.post("/getAssignedCustomer", async (req, res) => {
  try {

    // Query the database for customers assigned to the specified user ID
    const assignedCustomers = await customerServices.customer({assign_to})
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "Assigned user customer data retrieve successfully",
      userData:  assignedCustomers
    });
} catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Internal server error"
    });
}
});


customerController.post("/getAssignedCustomerCount", async (req, res) => {
  try {
  
    // Parse the user ID from the request body
    const assign_to = parseInt(req.body.assign_to);
    // console.log("assign_to",assign_to)
    // Query the database for customers assigned to the specified user ID
    const assignedCustomers = await customerServices.count({assign_to})
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "Assigned user customer data count retrieve successfully",
      userData:  assignedCustomers
    });
} catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Internal server error"
    });
}
});


customerController.get("/getCustomers", async (req, res) => {
  try {
  
    const assignedCustomers = await customerServices.allcustomer()
    // Return the matching customers as the API response
    sendResponse(res, 200, "Success", {
      message: "All  customer data retrieve successfully",
      userData:  assignedCustomers 
    });
} catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Internal server error"
    });
}
});


module.exports = customerController;
