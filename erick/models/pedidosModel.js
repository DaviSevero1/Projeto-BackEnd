const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
    Cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Clientes' },
    carrinho:{ type: mongoose.Schema.Types.ObjectId, ref: 'Carrinhos' },
    Endereco:{ type: mongoose.Schema.Types.ObjectId, ref: 'Enderecos' },

},{
    timestamps: true
});

const produtos = mongoose.model("Pedidos", pedidosSchema) 

module.exports = produtos;