const express = require("express");
const userController = express.Router();
const User = require("../Model/userSchema");
const userServices = require("../Services/userServices");
const { sendResponse } = require("../Utlis/common");
const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');



userController.post("/login", async (req, res) => {
  try {
    const { email, mobile } = req.body;
    
    // Retrieve the user based on the provided email
    const loggedUser = await userServices.login({ email, mobile });

    // If no user is found, return an error
    if (!loggedUser) {
      return sendResponse(res, 400, "Failed", {
        message: "Email or Password is incorrect"
      });
    }

    // // Compare the provided password with the user's hashed password
    // const isMatch = await bcrypt.compare(password, loggedUser.password);



    // // If passwords don't match, return an error
    // if (!isMatch) {
    //   return sendResponse(res, 400, "Failed", {
    //     message: "Invalid password"
    //   });
    // }

    // If passwords match, generate JWT token
    const token = jwt.sign({ userId: loggedUser.userId }, process.env.JWT_KEY);

    // Send success response with token
    sendResponse(res, 200, "Success", {
      message: "Logged in successfully",
      userData:  loggedUser, token 
    });
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, "Failed", {
      message: "Internal server error"
    });
  }
});

userController.get("/profile", async (req, res) => {
  try {
    const { userId } = req.body;  
    // Retrieve the user based on the provided email
    const loggedUser = await userServices.profile({ userId });

    // Send success response with token
    sendResponse(res, 200, "Success", {
      message: "Logged in successfully",
      userData:  loggedUser
    });
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, "Failed", {
      message: "Internal server error"
    });
  }
});



module.exports = userController;
