const connectDatabase = require('../database/db');
const User = require('../models/user');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectDatabase();
    // const { activityName, culturalRightId, userId } = JSON.parse(event.body);
    // let userObj = {
    //   userId,
    //   activityName,
    //   culturalRightId,
    // };

    userObj = await User.create(JSON.parse(event.body));
    return {
      statuscode: 201,
      body: JSON.stringify(userObj),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
