const mongoose = require('mongoose');
const PointSchema = require('./PointSchema');

const IoTDeviceSchema = new mongoose.Schema({
    device_user: String,
    device_id: String,
    device_name: String,
    ambient: String,
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
    Sensors: {
        digital: [Object],
        analog: [Object],
    },
    atuadores: {
        state: [Object]
    }
});

module.exports = mongoose.model("Device", IoTDeviceSchema);