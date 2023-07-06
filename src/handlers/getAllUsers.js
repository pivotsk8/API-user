const connectDatabase = require('../database/db');
const User = require('../models/user');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectDatabase();
  
    allUsers = await User.find();
    return {
      statuscode: 201,
      body: JSON.stringify(allUsers),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
