var pedidos = [
    {
    id:1,
    cliente_id : 1,
    cliente_telefone : "(99)99999-9999",
    endereco_id : 1,
    carrinho_id : 1 ,
    carrinho_valor : 230.55,
},
{
    id:2,
    cliente_id: 2,
    cliente_telefone:"(88)88888-8888",
    endereco_id: 3,
    carrinho_id:2,
    carrinho_valor:450.35
}
];
function listar (req, res,next) {
  res.json(pedidos);
}

function localizar (req, res,next) {
    const encontrado = pedidos.find(pedido => pedido.id === Number(req.params.id));

    if(!encontrado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    res.json(encontrado);
}
function criar (req, res, next) {
    const novoPedido ={
        id : pedidos[pedidos.length-1].id+1,
        cliente_id : req.body.cliente_id,
        cliente_telefone : req.body.cliente_telefone,
        endereco_id : req.body.endereco_id,
        carrinho_id : req.body.carrinho_id,
        carrinho_valor:req.body.carrinho_valor,
    }

    pedidos.push(novoPedido);
    res.status(201).json(novoPedido);
}

function atualizar(req, res, next) {
    const pedidoLocalizado = pedidos.find(pedido => pedido.id === Number(req.params.id));
    if(!pedidoLocalizado)
    {
        return res.status(404).json("Não encontrado");
    }
  
  pedidoLocalizado.cliente_id = req.body.cliente_id,
  pedidoLocalizado.cliente_telefone = req.body.cliente_telefone,
  pedidoLocalizado.endereco_id =  req.body.endereco_id,
  pedidoLocalizado.carrinho_id = req.body.carrinho_id,
  pedidoLocalizado.carrinho_valor = req.body.carrinho_valor,
    
  res.status(204).json(pedidoLocalizado);

}
function remover(req, res, next) {
    const localizado = pedidos.findIndex(pedido => pedido.id === Number(req.params.id));
    if(localizado < 0){
        return res.status(404).json("Pedido Não Localizado");
    }
    pedidos.splice(localizado, 1);
    
    res.status(204).end();  
}

module.exports = { listar, localizar, criar, atualizar,remover}
