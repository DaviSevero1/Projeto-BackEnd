const jwt =  require("jsowebtoken");
const config = require("../config/env.json");


module.exports = async function(req,res,next) {
    const {authorization} =  req.header;
    if(!authorization){
        return res.status(401).json({
            msg : "Token não existe",
        })
    }
    const [tipo,token] =  authorization.split(" ");
    if(!token){
        return res.status(401).json({
            msg : "Token não foi inserido",
        })
    } 
    jwt.verify(token,config.segredo, (error, useinfo) =>{
        if(error){
            return res.status(401).json({
                msg : "token inválido",
            })
            req.body.id = useinfo.id;
        }
    });
    next();
}