const mongoose = require('mongoose');

const IoTDataSchema = new mongoose.Schema({
  device_id: String,
	device_user: String,
	device_name: String,
  sensors: [Object],
  actuators: [Object],
  updated_at: Date,
});

module.exports = mongoose.model('iotdata', IoTDataSchema);