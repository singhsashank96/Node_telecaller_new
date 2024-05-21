const FeedbackStatus = require("../Model/feedbackStatusSchema");


exports.create = async (body) => {
  return await FeedbackStatus.create(body);
};

exports.GetFeedbackStatusString = async () => {
  try {
    // Fetch all data from the FeedbackStatus model excluding the 'id' column
    const feedbackStatusList = await FeedbackStatus.findAll({
      attributes: { exclude: ['id'] }
    });

    // Return the list of feedback statuses
    return feedbackStatusList;
  } catch (error) {
    console.error("Error fetching feedback status data:", error);
    throw new Error("Internal server error");
  }
};






