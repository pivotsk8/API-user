const connectDatabase = require('../database/db');
const User = require('../models/user');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectDatabase();
    const { id } = event.pathParameters;
    const { _id } = await User.findOne({ idUser: id });
    const deleteUser = await User.findByIdAndDelete(_id);
    return {
      statuscode: 200,
      body: JSON.stringify(deleteUser),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.statusCode || 404,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
