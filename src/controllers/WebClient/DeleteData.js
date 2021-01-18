const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async Delete(request, response) {
        const { device_id, device_name, ambient } = request.body;
        let device = IoTDevice.deleteOne({
            device_id,
            device_name,
            ambient
        }, 
        () => { return response.json() });

        return response.json(device);
    }
}
