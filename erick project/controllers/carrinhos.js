const carrinhos = [
    {
        id:1,
        cliente_id: 1,
        lista_produtos:[
            {
                item_id: 1,
                produtos_id : 1,
                produtos_nome : "memoria ram",
                produtos_valor : 150.35
            },
            {
                item_id: 2,
                produtos_id :2,
                produtos_nome : "mouse wifi",
                produtos_valor : 80.00
            }
        ],
        valor: 230.35
    },
    {
        id: 2,
        cliente_id: 2,
        lista_produtos:[
            {
                item_id: 1,
                produtos_id :1,
                produtos_nome : "memoria ram",
                produtos_valor : 150.35
            },
            {
                item_id: 2,
                produtos_id : 1,
                produtos_nome : "memoria ram",
                produtos_valor : 150.35
            },
            {
                item_id: 3,
                produtos_id :3,
                produtos_nome : "teclado wifi",
                produtos_valor : 230.65
            }
        ],
        valor: 531.35
    }
]       

function listar(req, res, next){
    res.json(carrinhos);
}

function localizar(req, res, next){
    const carrinhoSelecionadoado = carrinhos.find(carrinho => carrinho.id === Number(req.params.id));
    if(!carrinhoSelecionadoado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    res.json(carrinhoSelecionadoado);  
}

function criar(req, res, next){
    
    const novoCarrinho ={
        id: carrinhos[carrinhos.length-1].id+1,
        cliente_id: req.body.cliente_id,
        valor: req.body.valor,
        lista_produtos:req.body.lista_produtos
    }

    carrinhos.push(novoCarrinho);
    res.status(201).json(novoCarrinho);
}

function adicionarItem(req, res, next){
    const carrinhoSelecionadoado = carrinhos.find(carrinho => carrinho.id === Number(req.params.id));
    if(!carrinhoSelecionadoado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }

    const novoProduto = produtoSelecionadoado.id;
    if(!novoProduto)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }

    carrinhos.carrinhoSelecionadoado[lista_produtos].push(novoProduto);
    res.json(carrinhoSelecionadoado);  
}

function atualizar(req, res, next){
    const carrinhoLocalizado = carrinhos.find(carrinho => carrinho.id === Number(req.params.id));
    if(!carrinhoLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    let soma = 0;
    carrinhoLocalizado.cliente_id = req.body.cliente_id,
    carrinhoLocalizado.lista_produtos = req.body.lista_produtos
    for(let i = 0 ; i < carrinhos[lista_produtos.length]; i++ )
    {
        soma =+ carrinhos.lista_produtos[i.produtos_valor]
    }
    carrinhoLocalizado.valor = soma,
    res.status(204).end();
}

function deletar(req, res, next){
    const localizado = carrinhos.findIndex(carrinho => carrinho.id === Number(req.params.id));
    if(localizado < 0){
        return res.status(404).json("Não Localizado");
    }
    carrinhos.splice(localizado, 1);
    
    res.status(204).end();  

}

module.exports = {listar, adicionarItem, localizar, criar, atualizar, deletar};