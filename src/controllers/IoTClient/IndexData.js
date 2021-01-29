const IoTDevice = require('../../models/IoTDataSchema');

module.exports = {
    async index(request, response) {
        const { device_id, device_name, device_user } = request.query;
        let data = await IoTDevice.find({ device_id, device_name, device_user })
            .sort({ "updated_at": -1 })
            .limit(50);
        return response.json(data);
    }
}