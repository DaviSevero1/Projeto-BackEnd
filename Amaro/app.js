const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/env.json");
const routerCliente = require("./routes/routeCliente")

const app = express();
app.use(express.json());

app.use("/cliente", routerCliente);

mongoose.connect(config.url)
    .then(app.listen(config.porta, ()=>{
        console.log("API ta on")
    }))
    .catch(erro => {
        console.log("deu ruim", erro.message);
    })

