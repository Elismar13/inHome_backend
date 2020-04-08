const { Router } = require('express');    //Conjunto de modulos backend
const path = require('path');

//Todos os modelos do servidos
const IoTDevice = require('./controllers/WebClient/DevicesController');
const IoTData = require('./controllers/IoTClient/IoTController');
const Users = require('./controllers/Users/UserController');


const routes = Router();


//Caminhos e suas respectivas funcões (requisição, resposta)

routes.get('/', (request, response) => response.sendFile(path.join(__dirname, '/pages/HelloPage.html')));

routes.get('/devices', IoTDevice.index);
routes.post('/devices', IoTDevice.store);
routes.post('/update_devices', IoTDevice.update);
routes.delete('/delete_devices', IoTDevice.Delete);

routes.post('/update_data', IoTData.DataIotUpdate);

routes.get('/users/list', Users.IndexUser);

routes.get('/users', Users.Validation);
routes.post('/users', Users.createUser);
routes.delete('/users', Users.deleteUser);

module.exports = routes;   
