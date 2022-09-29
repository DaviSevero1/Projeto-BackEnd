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
    res.status(201).json(novoPedido).end();
}

function atualizar(req, res, next) {
  const pedidosLocalizado = pedidos.find(pedido => pedido.id === Number(req.params.id));
  if(!pedidosLocalizado)
  {
      return res.status(404).json({msg:"Não encontrado"});
  }
  
  
  pedidosLocalizado.id = req.body.id,
  pedidosLocalizado.cliente_id = req.body.cliente_id,
  pedidosLocalizado.cliente_telefone = req.body.cliente_telefone,
  pedidosLocalizado.endereco_id =  req.body.endereco_id,
  pedidosLocalizado.carrinho_id = req.body.carrinho_id,
  pedidosLocalizado.carrinho_valor = req.body.carrinho_valor,
    
  res.status(204).end();

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
