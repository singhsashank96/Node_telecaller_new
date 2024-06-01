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

exports.getCity = async ()  => {
  const city = await Customer.findAll({
    attributes: ['vname', 'aname', 'state'] // Select the required fields
  });

return city
};

exports.GetCompletedFeedback = async ({submittedby_username})  => {
  const completedCallList = await Feedback.findAll({
    where: {
      submittedby_username: submittedby_username
  }
  });

return completedCallList

};

// exports.isFeedbackExists = async ({ assignedCustomers }) => {
//     // Loop through assigned customers array
//     for (let i = 0; i < assignedCustomers.length; i++) {
//       // Check if feedback exists for the customer
//       const feedbackExists = await Feedback.findOne({ where: { customername: assignedCustomers[i].fname } });
  
//       // Add isExist key to customer object with the appropriate boolean value
//       assignedCustomers[i].isExist = !!feedbackExists; // true if feedbackExists, otherwise false

//     }
  
//     // Return the modified assigned customers array
//     return assignedCustomers;
//   };

exports.isFeedbackExists = async ({ assignedCustomers }) => {
  try {
      // Loop through assigned customers array
      for (let i = 0; i < assignedCustomers.length; i++) {
          // Find feedback for the customer
          const feedback = await Feedback.findOne({ where: { customername: assignedCustomers[i].fname } });

          // If feedback exists, add it to the customer object
          if (feedback) {
              assignedCustomers[i].feedback = feedback.feedback;
              assignedCustomers[i].remark = feedback.remark;
              assignedCustomers[i].calltimer = feedback.calltimer;
          } else {
              // If no feedback found, set default values
              assignedCustomers[i].feedback = null;
              assignedCustomers[i].remark = null;
              assignedCustomers[i].calltimer = null;
          }

          // Add isExist key to customer object with the appropriate boolean value
          assignedCustomers[i].isExist = !!feedback; // true if feedback exists, otherwise false
      }

      // Return the modified assigned customers array
      return assignedCustomers;
  } catch (error) {
      throw new Error('Error fetching feedback: ' + error.message);
  }
};
