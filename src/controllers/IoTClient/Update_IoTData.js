const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async dataUpdate(request, response) {
        const { DeviceID, digital, analog } = request.body;
        let device = await IoTDevice.find({ DeviceID });

        if(device) {
            device = await IoTDevice.update({
                DeviceID,
            }, {
                sensors: {
                    digital,
                    analog,
                }
            });
        }

        return response.json(device);
    }
}