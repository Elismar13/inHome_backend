const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async DataIotUpdate(request, response) {
        const { DeviceID, Digital, Analog } = request.body;
        let device = await IoTDevice.find({ DeviceID });

        if(device) {
            device = await IoTDevice.update({
                DeviceID,
            }, {
                Sensors: {
                    Digital:Digital,
                    Analog:Analog,
                }
            });
        }

        return response.json(device);
    }
}