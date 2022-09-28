const pedidos = [
    {
        id:1,
        cliente_id: 1,
        endereco_id: 1,
        carrinho_id:1,
        cliente_telefone:"(99)99999-9999",
        nome: "Casa",
        cidade: "Brasília",
        bairro: "Asa Sul",
        endereco: "SQS 402, bl B ",
        numero: "103",
        cep: "70330-515",
        tipo_residencia:"A",
        complento: "Avisar antes da entrega",
        carrinho_valor:230.55,
        lista_produtos:[
            {
                produtos_id :1,
                produtos_nome : "memoria ram",
                produtos_valor : 150.35
            },
            {
                produtos_id :2,
                produtos_nome : "mouse wifi",
                produtos_valor : 80.00
            }
        ]
    },
    {
        id:2,
        cliente_id: 2,
        endereco_id: 3,
        carrinho_id:2,
        cliente_telefone:"(88)88888-8888",
        endereco_id: 3,
        nome: "Casa da Mamãe",
        cidade: "Brasília",
        bairro: "Asa Sul",
        endereco: "SQS 102, bl A ",
        numero: "103",
        cep: "70330-515",
        tipo_residencia:"A",
        complento: "Avisar antes da entrega",
        carrinho_valor:450.35,
        lista_produtos:[
            {
                produtos_id :1,
                produtos_nome : "memoria ram",
                produtos_valor : 150.35
            },
            {
                produtos_id :1,
                produtos_nome : "memoria ram",
                produtos_valor : 150.35
            },
            {
                produtos_id :3,
                produtos_nome : "teclado wifi",
                produtos_valor : 230.65
            }
        ]
    }
]

function listar(req, res, next){
    res.json(pedidos);
}

function localizar(req, res, next){
    const pedidosSelecionadoado = pedidos.find(pedido => pedido.id === Number(req.params.id));
    if(!pedidosSelecionadoado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    res.json(pedidoSelecionadoado);  
}

function criar(req, res, next){
    
    const novoPedido ={
        id: pedidos[pedidos.length-1].id+1,
        cliente_id: req.body.cliente_id,
        endereco_id: req.body.endereco_id,
        carrinho_id:req.body.carrinho_id,
        cliente_telefone: req.body.cliente_telefone,
        carrinho_valor:req.body.carrinho_valor
    }

    pedidos.push(novoPedido);
    res.status(201).json(novoCarrinho);
}

function atualizar(req, res, next){
    const pedidosLocalizado = pedidos.find(pedido => pedido.id === Number(req.params.id));
    if(!pedidosLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    
    const clienteLocalizado = pedidos.find(pedido => pedido.id === Number(req.params.id));
    if(!pedidosLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }

    pedidosLocalizado.cliente_id = req.body.cliente_id,
    pedidosLocalizado.endereco_id = req.body.endereco_id,
    pedidosLocalizado.carrinho_id =req.body.carrinho_id,
    pedidosLocalizado.cliente_telefone = req.body.cliente_telefone,
    pedidosLocalizado.carrinho_valor = req.body.carrinho_valor
    res.status(204).end();
}

function deletar(req, res, next){
    const localizado = pedidos.findIndex(pedido => pedido.id === Number(req.params.id));
    if(localizado < 0){
        return res.status(404).json("Pedido Não Localizado");
    }
    pedidos.splice(localizado, 1);
    
    res.status(204).end();  

}

module.exports = {listar, localizar, criar, atualizar, deletar};