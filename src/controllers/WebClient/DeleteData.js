const IoTDevice = require('../../models/IoTDeviceSchema');

module.exports = {
    async deleteData(request, response) {
        const { device_id, device_name, ambient } = request.body;
        let device = null;
        try {
            device = await IoTDevice.deleteOne({
              device_id,
              device_name,
              ambient
            })
        } catch (e) {
            console.log(e);
        } finally {
            return device ? response.json(device).status(200) : response.status(203);
        }
    }
}
