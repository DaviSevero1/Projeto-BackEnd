const mongoose = require('mongoose');

const produtosSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, "Nome não informado"],
        trim: true,
    },
    marca:{
        type: String,
        required: [true, "Marca não informado"],
        trim: true,
    },
    quantidade:{
        type: Number,
        required: [true, "Quantidade não informado"],
        validate:{
            validator: function(valor) {
                return /^[0-9]\d*$/.test(valor)
            },
            message:'valor deve ser positivo'
        }
    },
    valor:{
        type: Number,
        required: [true, "Valor não informado"],
        min:[0, 'valor deve ser positivo'],
    },

},{
    timestamps: true
});

const produtos = mongoose.model("Produtos", produtosSchema) 

module.exports = produtos;