/* ARQUIVO RESPONSÀVEL POR GERENCIAR OS DISPOSITIVOS NA REDE */

//const axios = require('axios');
//const IoTDevice = require('../models/IoTDeviceSchema');

const { store } = require('./StoreData');
const { index } = require('./ListData');
const { update } = require('./UpdateData');
const { Delete } = require('./DeleteData');

module.exports = {
    store, 
    index,
    update,
    Delete,
}