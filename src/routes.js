const { Router } = require('express');
const path = require('path');
const { celebrate, Segments, Joi } = require('celebrate');

const IoTDevice = require('./controllers/WebClient/DevicesController');
const IoTData = require('./controllers/IoTClient/IoTController');
const Users = require('./controllers/Users/UserController');


const routes = Router();

routes.get('/', (request, response) => response.sendFile(path.join(__dirname, '/pages/HelloPage.html')));

routes.get('/devices',IoTDevice.index);

routes.post('/devices', celebrate({
    [Segments.BODY]: Joi.object().keys({
        device_id: Joi.string().required(), 
        device_name: Joi.string().required(), 
        device_user: Joi.string().required(),
        description: Joi.string().required(),
        ambient: Joi.string().required(), 
        latitude: Joi.number().required(), 
        longitude: Joi.number().required()
    })
}), IoTDevice.store);

routes.post('/devices', IoTDevice.update);

routes.delete('/devices', celebrate({
    [Segments.BODY]: Joi.object().keys({
        device_id: Joi.string().required(),
        device_name: Joi.string().required(),
        ambient: Joi.string().required(),
    })
}),IoTDevice.deleteData);

routes.get('/devices/data', IoTData.index);

routes.post('/devices/data', celebrate({
    [Segments.BODY]: Joi.object().keys({
        device_id: Joi.string().required(),
        device_user: Joi.string().required(),
        device_name: Joi.string().required(),
        ambient: Joi.string().required(),
        sensors: Joi.array()
                    .items(Joi.object().keys({
                        type: Joi.string().required(),
                        pin: Joi.number().min(0).max(50).required(),
                        state: Joi.boolean(),
                        value: Joi.number(),
                    })
                ),
        actuators: Joi.array()
                    .items(Joi.object().keys({
                        pin: Joi.number().min(0).max(50).required(),
                        state: Joi.boolean().required(),
                    })
                ),
    })
}),IoTData.store);



routes.get('/users/list', celebrate({
    [Segments.HEADERS]: Joi.object({
        id: Joi.string().required()
    }).unknown()
}),Users.IndexUser);


routes.get('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
}),Users.Validation);

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
        profile_image: Joi.string().uri().required(),
    })
}),Users.createUser);

routes.delete('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    })
}),Users.deleteUser);

module.exports = routes;   
