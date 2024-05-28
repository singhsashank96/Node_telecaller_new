const express = require("express");
const customerController = express.Router();
const Customer = require("../Model/customerSchema");
const payment = require("../Model/paymentSchema");

const Booking = require("../Model/bookingSchema");
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
    const { customername, taskTitle, feedback, submittedby_username, remark, calltimer, submittedby_userId } = req.body;

    // Check if required fields are missing
    if (!customername || !taskTitle || !feedback || !submittedby_username) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Submit feedback (including optional remark)
    const submittedFeedback = await customerServices.submitFeedback({
      customername,
      taskTitle,
      feedback,
      submittedby_username,
      remark, // Include remark if provided
      calltimer,
      submittedby_userId
    });

    sendResponse(res, 200, "Success", {
      message: "Feedback submitted successfully",
    });
  } catch (error) {
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while submitting feedback"
    });
  }
});




customerController.get("/getcity", async (req, res) => {
  try {
    const tasks = await customerServices.getCity()

     // Organize the data into a hierarchy
    //  const hierarchy = {};

    //  tasks.forEach(task => {
    //    // Check if the vname exists in the hierarchy
    //    if (!hierarchy.hasOwnProperty(task.vname)) {
    //      // If not, create a new entry for the vname
    //      hierarchy[task.vname] = {};
    //    }
 
    //    // Check if the aname exists under the vname
    //    if (!hierarchy[task.vname].hasOwnProperty(task.aname)) {
    //      // If not, create a new entry for the aname
    //      hierarchy[task.vname][task.aname] = [];
    //    }
 
    //    // Add the state under the aname
    //    hierarchy[task.vname][task.aname].push(task.state);
    //  });
 

    /// Initialize an empty object to hold the city data
    const cityMap = {};

    tasks.forEach(task => {
      // If the city already exists in the cityMap, add the area to its list
      if (cityMap.hasOwnProperty(task.vname)) {
        cityMap[task.vname].areas.push(task.aname);
      } else {
        // If the city does not exist, initialize it with the area as the first entry
        cityMap[task.vname] = {
          city: task.vname,
          areas: [task.aname],
          state: task.state
        };
      }
    });

    // Convert the cityMap object to an array of city objects
    const response = Object.values(cityMap);

     // Log the hierarchy
     console.log(response);

     sendResponse(res, 200, "Success", {
      message: "All  city data retrieve successfully",
      userData: response
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    sendResponse(res, 500, "Failed", {
      message: "Server Error while submitting feedback "
    });
  }
});


module.exports = customerController;
