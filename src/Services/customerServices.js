const Customer = require("../Model/customerSchema");
const Feedback = require("../Model/feedbacksSchema");
const sequelize = require('../Utlis/sequelize'); // Import the common Sequelize instance
const { QueryTypes } = require('sequelize');

exports.customer = async ( { assign_to} )  => {
  console.log("assign_to",assign_to)
  return await Customer.findAll({ where: {
    assign_to: assign_to
} });
};

exports.count = async ( { assign_to} )  => {
  return await Customer.count({
    where: {
        assign_to: assign_to
    }
});
};

exports.allcustomer = async ()  => {
  return await Customer.findAll();
};

exports.submitFeedback = async ({ customername, taskTitle, feedback, submittedby_username, remark,calltimer, submittedby_userId})  => {
  // Create feedback
  return await Feedback.create({
    customername,
    taskTitle,
    feedback,
    submittedby_username,
    remark,
    calltimer,
    submittedby_userId
  });

};


exports.getSampleCount = async ({ user_id})  => {
  return await sequelize.query(
    'SELECT COUNT(*) AS row_count FROM tbl_payment WHERE user_id = :user_id AND tilesName IS NOT NULL',
    { 
      type: QueryTypes.SELECT,
      replacements: { user_id: user_id }
    }
  );
};
