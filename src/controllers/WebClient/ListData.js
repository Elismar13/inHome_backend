const IoTDevice = require('../../models/IoTDeviceSchema');
 
module.exports = {
    async index(request, response) {
        const devices = await IoTDevice.find();
        //console.log(devices);
        return response.json(devices);
    }
}