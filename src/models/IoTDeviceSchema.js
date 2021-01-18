const mongoose = require('mongoose');
const PointSchema = require('./PointSchema');

const IoTDeviceSchema = new mongoose.Schema({
    DeviceUser: String,
    DeviceID: String,
    DeviceNAME: String,
    description: String,
    ambient: String,
    status: String,
    updated_at: Date,
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
    sensors: {
        digital: [Object],
        analog: [Object],
    },
    atuatores: {
        state: [Object]
    }
});

module.exports = mongoose.model("Device", IoTDeviceSchema);