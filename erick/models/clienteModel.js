const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const {Schema} = mongoose;

const clientesSchema = new mongoose.Schema({
    email : {
        type: String,
        required : [true,"Precisa ser um email valido"],
        trim : true, 
        unique : [true, "O email ja foi cadastrado"],
        validate : {
            validator : function(valor) {
                return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(valor);
            },
            mesage : "Precisa de um email valido"
        }
    },
    nome : {
        type: String,
        required : [true,"Precisa ser um email valido"],
        trim : true
    },
    
    fone : {
        type : String,
    },

    senha : {
        type: String,
        required : [true,"Precisa ser uma senha valida"],
        trim : true,
        selected : false, 
    },
    
    lista_enderecos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Enderecos'}]

},{
    timestamps: true
});

clientesSchema.pre('save',function (next) {
    console.log(this);
    const hash = bcrypt.hashSync(this.senha,8);
    this.senha = hash;
    next();
});

module.exports = mongoose.model("Cliente", clientesSchema);