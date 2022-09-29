const produtos = [
    { 
        id: 1,
        nome_produto: 'Memoria RAM 16GB 2X8',
        marca: 'Corsair',
        categoria: 'RAM', 
        preco:275.00,
        descricao: 'Produto para melhorar o processamento do computador.' 
    },
    { 
        id: 2,
        nome_produto: 'GTX1050Ti',
        marca: 'Gigabyte', 
        categoria: 'Placa de Vídeo', 
        preco: 1500.00, 
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

    const novoProduto ={
        id : produtos[produtos.length-1].id+1,
        nome_produto: req.body.nome_produto,
        marca: req.body.marca,
        categoria: req.body.categoria,
        preco: req.body.preco,
        descricao: req.body.descricao
    }
    produtos.push(novoProduto);
    res.status(201).json(novoProduto).end();
}

function atualizar(req, res, next) {
    const produtoLocalizado = produtos.find(produto => produto.id === Number(req.params.id));
  if(!produtoLocalizado)
  {
      return res.status(404).json({msg:"Não encontrado"});
  }
    produtoLocalizado.nome_produto = req.body.nome_produto;
    produtoLocalizado.marca = req.body.marca;
    produtoLocalizado.categoria = req.body.categoria;
    produtoLocalizado.preco = req.body.preco;
    produtoLocalizado.descricao = req.body.descricao;



    res.status(204).json(produtoLocalizado).end();
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