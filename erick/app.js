const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
const app = express()

const bodyParser = require('body-parser');
const routes = require('./routes/productRoutes');
const routesPedidos = require('./routes/pedidos');
const routesCarrinhos = require('./routes/carrinho');
const routesEnderecos = require('./routes/enderecos');
const routesClientes = require('./routes/routerClientes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);
app.use(routesPedidos);
app.use(routesCarrinhos);
app.use(routesEnderecos);
app.use(routesClientes);

module.exports = app;
