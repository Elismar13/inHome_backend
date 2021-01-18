const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async store(request, response) {
        //console.log(request.body);
        const { device_id, device_name, ambient, latitude, longitude } = request.body;
        let device = await IoTDevice.findOne( { device_id } );
    
        const location = {
            type: 'Point',
            coordinates: [latitude, longitude]
        };
    
        if(!device) {
            device = await IoTDevice.create({
                device_id,
                device_name: device_name,
                ambient: ambient,
                location,
                sensors: {
                    analog: [],
                    digital: [],
                }
            });
        }
        
        return response.json(device);
    }
}

