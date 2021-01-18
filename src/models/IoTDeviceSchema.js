const mongoose = require('mongoose');
const PointSchema = require('./PointSchema');

const IoTDeviceSchema = new mongoose.Schema({
    device_user: String,
    device_id: String,
    device_name: String,
    description: String,
    ambient: String,
    status: String,
    updated_at: Date,
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
});

module.exports = mongoose.model("device", IoTDeviceSchema);