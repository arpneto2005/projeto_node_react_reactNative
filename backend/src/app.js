const express = require('express');
/** Módulo de segurança */
const cors = require('cors');
/** Importando as rotas */
const routes = require('./routes');

/** Instanciando a objeto express */
const app = express();
/** Informar qual origem pode acessar a aplicação */
/* origem: 'https://exemplo.com' */
app.use(cors());
/** Informando que será usado JSON */
app.use(express.json());
/** Usando a importação das rotas */
app.use(routes);

port = 3333;
app.listen(port, () => {
    console.log(`Server on, in port ${port}`)
});