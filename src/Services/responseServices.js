const Response = require("../Model/responseSchema");


// exports.create = async (body) => {
//   return await FeedbackStatus.create(body);
// };

exports.GetFeedbackStatusString = async () => {
  try {
    // Fetch all data from the FeedbackStatus model excluding the 'id' column
    const feedbackStatusList = await Response.findAll({
      attributes: ['response']
    });
// Extract the response strings from the fetched data
//const responseStrings = feedbackStatusList.map(feedbackStatus => feedbackStatus.response);

    // Return the list of feedback statuses
    return feedbackStatusList;
  } catch (error) {
    console.error("Error fetching feedback status data:", error);
    throw new Error("Internal server error");
  }
};






