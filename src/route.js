const express = require("express");
const router = express.Router();
const userController = require("./Controller/userController");
const customerController = require("./Controller/customerController");
const paymentController = require("./Controller/paymentController");
const feedbackSchemaController = require("./Controller/feedbackSchemaController");


router.use("/user", userController);
router.use("/customer", customerController);
router.use("/samples", paymentController);
router.use("/feedback", feedbackSchemaController);




module.exports = router;