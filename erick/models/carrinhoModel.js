const mongoose = require('mongoose');

const carrinhosSchema = new mongoose.Schema({
        lista_produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produtos' }]
        
},{
    timestamps: true
});
const  carrinhos = mongoose.model("Carrinhos", carrinhosSchema);

module.exports = carrinhos;