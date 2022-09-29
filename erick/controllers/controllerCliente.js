const express = require(`express`)

const cliente = [
    { 
        id: 1, nome: `Amaro`, 
    fone: `9999-9999`, 
    cpf: '2222-2222' 
},
    { id: 2, 
        nome: `Gab10`,
        fone: `9999-9999`, 
        cpf: '2222-2222' 
    }

];

function listar(req, res, next) {
    res.json(cliente);
}

function exibir(req, res, next) {
    const clienteLocalizado = cliente.find(cliente =>
        cliente.id === Number(req.params.id));
    if (!clienteLocalizado) {
        return res.status(404).json({ msg: `cliente nao localizado` });
    }

    res.json(clienteLocalizado);
}

function criar(req, res, next) {
    const novoCliente = {
        id:cliente.length +1,
        nome: req.body.nome,
        fone: req.body.fone,
        cpf: req.body.cpf
    }
    cliente.push(novoCliente);
    res.status(201).json(novoCliente)
}

function atualizar(req, res, next) {
    let clienteLocalizado = cliente.find(cliente =>
        cliente.id === Number(req.params.id));
    if (!clienteLocalizado) {
        return res.status(404).json({ msg: `cliente nao localizado` });
    } 

    clienteLocalizado.nome = req.body.nome;
    clienteLocalizado.fone = req.body.fone;
    clienteLocalizado.cpf = req.body.cpf;
    res.status(204).json(clienteLocalizado).end();
}

function deletar(req, res, next) {
    const posicaoCliente = cliente.findIndex(cliente =>
        cliente.id === Number(req.params.id));
        if(posicaoCliente < 0) {
            return res.status(404).json({ msg: `cliente nao localizado` });
        }
        cliente.splice(posicaoCliente, 1);
        res.status(204).end();
}



module.exports = { listar, criar, atualizar, deletar, exibir };