const IoTDataSchema = require('../../models/IoTDataSchema');
const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async store(request, response) {
        const { device_id, device_user, device_name, sensors } = request.body;
        let device = await IoTDevice.find({ device_id });
        
        if(device) {
            iot_data = await IoTDataSchema.create({
                device_id,
                device_user,
                device_name,
                sensors,
                updated_at: Date.now(),
            });
            return response.json(iot_data);
        }
        return response.status(203);
    }
}