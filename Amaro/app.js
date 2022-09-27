const express = require('express');
const app = express();
const routerCliente =  require("./router/routercliente")


app.use(express.json())
app.use('/', routerCliente);    

app.listen(3000,() => {
    console.log('API está on')
});

module.exports = app;