const express = require('express');
const mongoose = require("mongoose");
const config = require("./config/env.json");
const app = express();
const routerProdutos =  require("./router/router_produtos")


app.use(express.json())
app.use('/', routerProdutos);    

app.listen(3000,() => {
    console.log('API está on')
});

module.exports = app;