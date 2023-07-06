const connectDatabase = require('../database/db');
const User = require('../models/user');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectDatabase();
    const { id } = event.queryStringParameters;
    const { _id } = await User.findOne({ idUser: id });
    updateUser = await User.findByIdAndUpdate(_id, JSON.parse(event.body), {
      new: true,
    });
    return {
      statuscode: 200,
      body: JSON.stringify(updateUser),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.statusCode || 404,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
