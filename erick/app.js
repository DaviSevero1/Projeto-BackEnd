const express = require('express');
const mogoose = require('mongoose');
const config = require('./config/env.json');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

const bodyParser = require('body-parser');
const routesProduct = require('./routes/productRoutes');
const routesPedidos = require('./routes/pedidos');
const routesCarrinhos = require('./routes/carrinho');
const routesEnderecos = require('./routes/enderecos');
const routesClientes = require('./routes/routerClientes');
const routesAdmin = require('./routes/admin');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routesProduct);
app.use(routesPedidos);
app.use(routesCarrinhos);
app.use(routesEnderecos);
app.use(routesClientes);
app.use(routesAdmin);

module.exports = app;
