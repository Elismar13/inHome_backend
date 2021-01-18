const IoTDevice = require('../../models/IoTDataSchema');

module.exports = {
    async index(request, response) {
        const { device_id, device_name, device_user } = request.body;
        let device = await IoTDevice.find({ device_id, device_name, device_user });

        return response.json(device);
    }
}