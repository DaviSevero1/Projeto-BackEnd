const express = require('express');
const server = express();

const produtos = [
    {
        id: 1, produto_nome: "Memória RAM",
        marca: "Corsair", categoria: "Ram",
        preco: "R$:250,00", descricao: "Produto para melhorar processamento de computador"
    },
    {
        id: 2, produto_nome: "GTX 4090",
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

server.listen(3000, () => {
    console.log('API esta ON');
})
