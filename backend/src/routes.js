const express = require('express');
/**
 * Importando módulo do express responsável pelas rotas
 */
const routes = express.Router();
//const connection = require('./database/connection');

const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
 /** Rotas Ongs */
routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.verOngs);

/** rotas Incidents */
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.verIncidents);
routes.delete('/incidents/:id', IncidentController.delete);

/** Rotas Profile */
routes.get('/profile', ProfileController.verProfile);

/** Rotas Session */
routes.post('/session', SessionController.create);

/**
 * id: c970e4dd
 */

routes.get('/', async (resquest, response) => {
    //const ongs = await connection('ongs').select('*')
    return response.json({
        proposito: "Mostrar em entrevistas",
        programador: "Ângelo"
    });
});

module.exports = routes;