const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async update (request, response) {
        const { DeviceID, DeviceNAME, ambient, latitude, longitude } = request.body;
        let Device = await IoTDevice.findOne( { DeviceID } );
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        if(Device) {
            Device = await IoTDevice.update({
                DeviceID: DeviceID
            }, {
               DeviceID: 'user3' 
            })
        }

        return response.json(Device);
    }
}