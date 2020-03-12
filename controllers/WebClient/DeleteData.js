const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async Delete(request, response) {
        const { DeviceID, DeviceNAME, ambient } = request.body;
        let device = IoTDevice.deleteOne({
            DeviceID: DeviceID,
            DeviceNAME: DeviceNAME,
            ambient: ambient
        }, 
        () => { return response.json() });

        return response.json(device);
    }
}
