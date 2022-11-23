const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const {Schema}  = mongoose;

const clienteSchema = new Schema({
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
        type: Number,
        required : [true,"Precisa ser uma senha valida"],
        trim : true,
        selected : false, 
        validate : {
            validator : function(valor) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(valor);
            },
            mesage : "Precisa de uma senha forte"
        }
    }
})

clienteSchema.pre('save',(next) =>{
    const hash = bcrypt.hashSync(this.senha,8);
    this.senha = hash;
    next();
});

module.export = mongose.model("Cliente", clienteSchema);