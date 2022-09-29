const express = require(`express`)

const produtos = [
    { 
        id: 1,
        nome_produto: 'Memoria RAM 16GB 2X8',
        marca: 'Corsair',
        categoria: 'RAM', preco:'R$:275,00',
        descricao: 'Produto para melhorar o processamento do computador.' 
    },
    { 
        id: 1,
        nome_produto: 'GTX1050Ti',
        marca: 'Gigabyte', 
        categoria: 'Placa de Vídeo', 
        preco:'R$:1500,00', 
        descricao: 'Produto para melhorar o desempnho visual.' 
    }

];

function listar(req, res, next) {
    res.json(produtos);
}

function exibir(req, res, next) {
    const produtosLocalizado = produtos.find(produtos =>
        produtos.id === Number(req.params.id));
    if (!produtosLocalizado) {
        return res.status(404).json({ msg: `produtos nao localizado` });
    }

    res.json(produtosLocalizado);
}

function criar(req, res, next) {
    const novoprodutos = {
        id:produtos.length +1,
        nome_produto: req.body.nome_produto,
        marca: req.body.marca,
        categoria: req.body.categoria,
        preco: req.body.preco,
        descricao: req.body.descricao
    }
    produtos.push(novoprodutos);
    res.status(201).json(novoprodutos)
}

function atualizar(req, res, next) {
    const produtosLocalizado = produtos.find(produtos =>
        produtos.id === Number(req.params.id));
    if (!produtosLocalizado) {
        return res.status(404).json({ msg: `produtos nao localizado` });
    }
    produtosLocalizado.nome_produto = req.body.nome_produto;
    produtosLocalizado.marca = req.body.marca;
    produtosLocalizado.categoria = req.body.categoria;
    produtosLocalizado.preco = req.body.preco;
    produtosLocalizado.descricao = req.body.descricao;



    res.status(204).end();
}
//teste

function deletar(req, res, next) {
    const posicaoprodutos = produtos.findIndex(produtos =>
        produtos.id === Number(req.params.id));
        if(posicaoprodutos < 0) {
            return res.status(404).json({ msg: `produtos nao localizado` });
        }
        produtos.splice(posicaoprodutos, 1);
        res.status(204).end();
}



module.exports = { listar, criar, atualizar, deletar, exibir };