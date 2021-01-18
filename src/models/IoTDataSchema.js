const mongoose = require('mongoose');

const IoTDataSchema = new mongoose.Schema({
  sensors: [Object],
  actuators: [Object],
  updated_at: Date,
});

module.exports = mongoose.model('iotdata', IoTDataSchema);