const app = require('../app')
const mongoose = require('mongoose');
const config = require('../config/env.json')

mongoose.connect(config.url)
                .then(app.listen(config.porta,() => {
                    console.log("Rodando");
                }))
                .catch(erro => {
                    console.log("Não esta rodando");
                });