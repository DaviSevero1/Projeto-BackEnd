const express = require('express');
const createError = require('http-errors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const indexRouter = require('./routes/index');
const carrinhoRouter = require('./routes/carrinhos');
const enderecosRouter = require('./routes/enderecos');
const pedidosRouter = require('./routes/pedidos');
const routerCliente =  require("./router/routercliente")


var app = express();
app.use(express.json()); //vem algo na req JSON req.body
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/', indexRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/pedidos', pedidosRouter);
app.use('/enderecos', enderecosRouter);
app.use('/clientes')

module.exports = app;
