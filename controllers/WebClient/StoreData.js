const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async store(request, response) {
        //console.log(request.body);
        const { DeviceID, DeviceNAME, ambient, latitude, longitude } = request.body;
        let Device = await IoTDevice.findOne( { DeviceID } );
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };
    
        if(!Device) {
            Device = await IoTDevice.create({
                DeviceID: DeviceID,
                DeviceNAME: DeviceNAME,
                ambient: ambient,
                location,
                Sensors: {
                    Analog: [],
                    Digital: [],
                }
            });
        }
        
        return response.json(Device);
    }
}

