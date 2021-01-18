const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async store(request, response) {
        const { device_id, device_name, device_user, description, ambient, latitude, longitude } = request.body;
        let device = await IoTDevice.findOne({ device_id });

        const location = {
            type: 'Point',
            coordinates: [latitude, longitude]
        };
    
        if(!device) {
            device = await IoTDevice.create({
                device_id,
                device_user,
                device_name,
                ambient,
                description,
                location,
                updated_at: Date.now(),
            });
        }
        
        return response.json(device);
    }
}

