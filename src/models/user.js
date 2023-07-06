const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  consecutive: {
    type: String,
    required: true,
  },
  activityName: {
    type: String,
    trim: true,
    required: true,
  },
  culturalRightId: {
    type: String,
    required: true,
  },

  nacId: {
    type: String,
    required: true,
  },
  activityDate: {
    type: String,
    require: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  finalHour: {
    type: String,
    required: true,
  },
  expertiseId: {
    type: String,
    required: true,
  },
  fechaDb: {
    type: Date,
    default: Date.now,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
