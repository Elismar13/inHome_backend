const { Router } = require('express');    //Conjunto de modulos backend
const path = require('path');
const { celebrate, Segments, Joi } = require('celebrate');

//Todos os modelos do servidos
const IoTDevice = require('./controllers/WebClient/DevicesController');
const IoTData = require('./controllers/IoTClient/IoTController');
const Users = require('./controllers/Users/UserController');



const routes = Router();


//Caminhos e suas respectivas funcões (requisição, resposta)

routes.get('/', (request, response) => response.sendFile(path.join(__dirname, '/pages/HelloPage.html')));

routes.get('/devices',IoTDevice.index);

routes.post('/devices', celebrate({
    [Segments.BODY]: Joi.object().keys({
        device_id: Joi.string().required(), 
        device_name: Joi.string().required(), 
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


routes.post('/devices/update_data', celebrate({
    [Segments.BODY]: Joi.object().keys({
        device_id: Joi.string().required(),
        digital: Joi.array()
                .items(Joi.object().keys({
                    type: Joi.string().length(1).required(),
                    state: Joi.boolean().required(),
                    pin: Joi.string().max(3).required()
                })
        ),
        analog: Joi.array().items(Joi.object().keys({
            type: Joi.string().length(1).required(),
            value: Joi.string().min(1).max(5).required(),
            pin: Joi.string().max(3).required()
        }))
    })
}),IoTData.dataUpdate);



routes.get('/users/list', celebrate({
    [Segments.HEADERS]: Joi.object({
        id: Joi.string().required()
    }).unknown()
}),Users.IndexUser);


routes.get('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        usename: Joi.string().required(),
        password: Joi.string().required()
    })
}),Users.Validation);

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        usename: Joi.string().required(),
        password: Joi.string().required(),
        profile_image: Joi.string().uri().required(),
    })
}),Users.createUser);

routes.delete('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        usename: Joi.string().required(),
        password: Joi.string().required(),
    })
}),Users.deleteUser);

module.exports = routes;   
