const { ObjectID } = require('bson');
const { PromiseProvider } = require('mongoose');
const Carrinho = require("../models/carrinhoModel");
const Produto = require("../models/produtosModel");


async  function listar(req,res){
    await Carrinho.find({})
    .then(carrinhos => {return res.json(carrinhos)})
    .catch( error => {return res.status(500).json(error)});
        
};




async function consultar(req,res){
    await Carrinho.findOne({_id: ObjectID(req.params.id)})
    .then(carrinho => {
        if(carrinho) return res.json(carrinho);
        else return res.status(404).json('Carrinho Não Localizado');
    })
    .catch(error => {return res.status(500).json(error) });
};

async function criar (req, res){
    const carrinho =  new Carrinho(req.body);
    await carrinho.save()
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

    await Carrinho.findOneAndUpdate({_id:ObjectID(req.params.id)},req.body, {runValidators : true})
    .then(carrinho => {
        if(carrinho) {return res.status(204).end()}
        else{ return res.status(404).json("Carrinho não localizado")};
    })
    .catch(error => {
        const msgErro = {};
        Object.values(erro.errors).forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
    });

};

async function adicionar(req,res){

    await Carrinho.findOne({_id: ObjectID(req.params.id)})
    .then(carrinho => {
        
        Produto.findOne({_id: ObjectID(req.params.id_Produto)})
        .then(produto => {
            if(produto){ 
                carrinho.lista_produtos.push(produto._id);
                carrinho.save().then(doc =>{
                    return res.json(doc)}
                )
            }
            else return res.status(404).json('Carrinho Não Localizado');
        })
        .catch(error => {return res.status(500).json(error) });
    })
    .catch(error => {return res.status(500).json(error) });
    
};


async function remover(req,res){
    await Carrinho.findOneAndDelete({_id: ObjectID(req.params.id) })
    .then(carrinho => {
        if(carrinho) return res.status(204).end();
        else return res.status(404).json('CarrinhoNão localizado'); 
    })
    .catch (error => {return res.status(500).json (error) });
};

module.exports = {listar, consultar, adicionar, criar, atualizar, remover};
