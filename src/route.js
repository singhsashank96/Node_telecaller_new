const express = require("express");
const router = express.Router();
const userController = require("./Controller/userController");
const customerController = require("./Controller/customerController");


router.use("/user", userController);
router.use("/customer", customerController);



module.exports = router;