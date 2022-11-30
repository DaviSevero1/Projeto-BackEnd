const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
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
        required : [true,"Precisa ter um nome"],
        trim : true,
        minlength: [3, "Precisa de pelomenos 3 caracteres"]
    },
    
    fone : {
        type : String,
    },

    senha : {
        type: String,
        required : [true,"Precisa ter uma senha valida"],
        trim : true,
        selected : false, 
    },

},{
    timestamps: true
});

adminSchema.pre('save',function (next) {
    const hash = bcrypt.hashSync(this.senha,8);
    this.senha = hash;
    next();
});

module.exports = mongoose.model("Admin", adminSchema);