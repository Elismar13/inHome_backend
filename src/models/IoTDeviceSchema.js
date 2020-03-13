const mongoose = require('mongoose');
const PointSchema = require('./PointSchema');

const IoTDeviceSchema = new mongoose.Schema({
    DeviceUser: String,
    DeviceID: String,
    DeviceNAME: String,
    ambient: String,
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
    Sensors: {
        Digital: [Object],
        Analog: [Object],
    },
    Atuatores: {
        State: [Object]
    }
});

module.exports = mongoose.model("Device", IoTDeviceSchema);