const mongoose = require('mongoose');

const contatosSchema = new mongoose.Schema({
        nome:
        {
            type : String,
            required: [true, "Nome é obrigatório"],
            trim: true,
            minLenght: [3, 'Nome deve conter pelomenos 3 caracteres'],
            
        },
        fone:
        {
            type : String,
            required: [true, "Telefone é obrigatório"]
        },
        status:
        {
            type : String,
            required: [true, "Nome é obrigatório"],
            trim: true,
            enum: {values:["Sim", "Não"], message:'Nome deve conter pelomenos 3 caracteres'},
            
        }

},{
    timestamps: true
});

module.exports = mongoose.model("Contato", contatosSchema);