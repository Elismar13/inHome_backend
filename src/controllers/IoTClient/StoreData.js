const IoTDataSchema = require('../../models/IoTDataSchema');
const IoTDevice = require('../../models/IoTDeviceSchema');
const { sendDataToAllClients } = require('../../WebSocket');

module.exports = {
    async store(request, response) {
        const { ambient, device_id, device_user, device_name, sensors } = request.body;
        let device = await IoTDevice.find({ device_id });
        
        if(device) {
            iot_data = await IoTDataSchema.create({
                ambient,
                device_id,
                device_user,
                device_name,
                sensors,
                updated_at: Date.now(),
            });
            sendDataToAllClients(iot_data);
            return response.json(iot_data);
        }
        return response.status(203);
    }
}