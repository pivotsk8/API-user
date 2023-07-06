const mongoose = require('mongoose');

let conn = null;

module.exports = connectDatabase = async () => {
  if (conn == null) {
    console.log('creating new connectoin to data base ');
    conn = mongoose.connect(process.env.DB, {
      serverSelectionTimeoutMS: 50000,
    });

    return conn;
  }

  console.log('connection already established');
};
