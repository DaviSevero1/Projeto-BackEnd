const express = require('express');
const createError = require('http-errors');
const server = express();

//iedmport swaggerUI from 'swagger-ui-express';

const produtos = [
    {
        id: 1, nome_produto: "Memória RAM",
        marca: "Corsair", categoria: "Ram",
        preco: "R$:250,00", descricao: "Produto para melhorar processamento de computador"
    },
    {
        id: 2, nome_produto: "GTX 4090",
        marca: "Gigabyte", categoria: "Placa de Video",
        preco: "R$:10.050,00", descricao: "Produto para melhorar o desempenho de games "
    }

]

server.get('/', (req, res, next) =>{
    return res.json({mensagem: 'Deu baaaaaaaaaaaaaaaaaao'})
})

server.get('/produtos', (req, res, next) =>{
    res.json(produtos);
})

server.get('/produtos/:id', (req, res, next) => {
    const id = Number(req.params.id);
    if (id > produtos.length) return next(createError(404, "Produto não encontrado."));
    res.json(produtos[id]);
})

server.post('/produtos', function(req, res, next) {
    const novo_produto = {
        id: produtos.length + 1,
        nome_produto :req.body.nome_produto,
        marca:        req.params.marca,
        categoria:    req.body.categoria,
        preco:        req.body.preco,
        descricao:    req.body.descricao
    }
    produtos.push(novo_produto);
    res.status(201).json(novo_produto);
})

server.put('/produtos/:id', function (req, res, next){
    const produto_localizado = produtos.find(
        produtos => produtos.id === Number(req.params.id)
    );
    if(!produto_localizado){
        return res.status(404).json({msg: "Contato não encontrado"})
    }
    produto_localizado.nome_produto = req.body.nome_produto;
    produto_localizado.marca = req.body.marca;
    produto_localizado.categoria = req.body.categoria;
    produto_localizado.preco = req.body.preco;
    produto_localizado.descricao = req.body.descricao;

    res.status(204).end();
})

server.delete("/produtos/:id", function(req, res, next){
    const posicao_produto = produtos.findIndex(contato =>
        produtos.id == Number(req.params.id)
        );
        if( posicao_produto < 0){
            return res.status(404)
            .json({msg: "Contato não encontrado"})
        }
        contato.slice(posicao_produto, 1);
        res.status(204).end();
})

server.listen(3001, () => {
    console.log('API esta ON');
})