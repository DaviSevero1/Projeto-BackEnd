const { ObjectID } = require('bson');
const { PromiseProvider } = require('mongoose');
const Pedido = require("../models/pedidoModel");


async  function listar(req,res){
    await Pedido.find({})
    .then(pedidos => {return res.json(pedido)})
    .catch( error => {return res.status(500).json(error)});
        
};



async function consultar(req,res){
    await Pedido.findOne({_id: ObjectID(req.params.id)})
    .then(pedido => {
        if(pedido) return res.json(pedido);
        else return res.status(404).json('Pedido Não Localizado');
    })
    .catch(error => {return res.status(500).json(error) });
};

async function criar (req, res){
    const pedido =  new pedido(req.body);
    await pedido.save()
    .then (doc => {
        return res.status(201).json(doc);
    })
    .catch(error => {
        const msgErro = {};
        Object.values(error.errors).forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
})
}

async function atualizar(req,res){

    await Pedido.findOneAndUpdate({_id:ObjectID(req.params.id)},req.body, {runValidators : true})
    .then(pedido=> {
        if(pedido) {return res.status(204).end()}
        else{ return res.status(404).json("Pedido não localizado")};
    })
    .catch(error => {
        const msgErro = {};
        Object.values(erro.errors).forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
    });

};

async function remover(req,res){
    await Pedido.findOneAndDelete({_id: ObjectID(req.params.id) })
    .then(pedido => {
        if(pedido) return res.status(204).end();
        else return res.status(404).json('Pedido Não localizado'); 
    })
    .catch (error => {return res.status(500).json (error) });
};

module.exports = {listar, consultar, criar, atualizar, remover};