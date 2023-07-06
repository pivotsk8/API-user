const connectDatabase = require('../database/db');
const User = require('../models/user');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectDatabase();
    const { id } = event.pathParameters;
    console.log(id);
    findUser = await User.findOne({ idUser: id });
    return {
      statuscode: 200,
      body: JSON.stringify(findUser),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.statusCode || 404,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
