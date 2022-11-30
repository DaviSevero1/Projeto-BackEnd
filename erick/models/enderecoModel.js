const mongoose = require('mongoose');

const enderecosSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, "Nome não informado"],
        trim: true,
    },
    Cidade:{
        type: String,
        required: [true, "Marca não informado"],
        trim: true,
    },
    Bairo:{
        type: String,
        required: [true, "Endereço não informado"],
        trim: true
    },
    Numero:{
        type: String,
        required: [true, "Numero não informado"],
        trim: true
    },
    complemento:{
        type: String,
        trim: true
    },
    cliente_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clientes' }]

    
},{
    timestamps: true
});

const enderecos = mongoose.model("Enderecos", enderecosSchema) 

module.exports = enderecos;
