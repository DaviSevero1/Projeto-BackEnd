let carrinhos = [
    {
        id:1,
        cliente_id : 1,
        carrinho_valor : 230.55,
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
            },
            
        ]
    },
    {
        id:2,
        cliente_id: 2,
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
];
function listar (req, res,next) {
    res.json(carrinhos);
  }
  
  function localizar (req, res,next) {
      const encontrado = carrinhos.find(carrinho => carrinho.id === Number(req.params.id));
  
      if(!encontrado)
      {
          return res.status(404).json({msg:"Não encontrado"});
      }
      res.json(encontrado);
  }
  function criar (req, res, next) {
      const novoCarrinhos ={
          id : carrinhos[carrinhos.length-1].id+1,
          cliente_id : req.body.cliente_id,
          carrinho_valor:req.body.carrinho_valor,
          lista_produtos:[
            {
                produtos_id :req.body.lista_produtos[produtos_id],
                produtos_nome : req.body.lista_produtos[produtos_nome],
                produtos_valor : req.body.lista_produtos[produtos_valor],
            }
        ]
      }
  
      carrinhos.push(novoCarrinhos);
      res.status(201).json(novoCarrinhos);
  }
  function listar (req, res,next) {
    res.json(carrinhos);
  }
  
  function localizar (req, res,next) {
      const encontrado = carrinhos.find(carrinho => carrinho.id === Number(req.params.id));
  
      if(!encontrado)
      {
          return res.status(404).json({msg:"Não encontrado"});
      }
      res.json(encontrado);
  }
  function criar (req, res, next) {
    const novoCarrinho ={

        
            id: carrinhos[carrinhos.length-1].id+1,
            cliente_id : req.body.cliente_id,
            carrinho_valor : req.body.carrinho_valor,
            lista_produtos:[
                {
                    produtos_id :req.body.produtos_id,
                    produtos_nome : req.body.produtos_nome,
                    produtos_valor : req.body.produtos_valor
                }
                
            ]
        
    }

    carrinhos.push(novoCarrinho);
    res.status(201).json(novoCarrinho);
  }
  
  function atualizar(req, res, next) {
    const carrinhoLocalizado = carrinhos.find(carrinho => carrinho.id === Number(req.params.id));
    if(!carrinhoLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    
    carrinhoLocalizado.cliente_id = req.body.cliente_id,
        carrinhoLocalizado.carrinho_valor = req.body.carrinho_valor,
        carrinhoLocalizado.lista_produtos = [
            {
                produtos_id : req.body.produtos_id,
                produtos_nome : req.body.produtos_nome,
                produtos_valor : req.body.produtos_valor,
            }
        ]
      
    res.status(204).end();
  
  }
  function remover(req, res, next) {
    const localizado = carrinhos.findIndex(carrinho => carrinho.id === Number(req.params.id));
    if(localizado < 0){
        return res.status(404).json("Endereço Não Localizado");
    }
    carrinhos.splice(localizado, 1);
    
    res.status(204).end();  ;  
}
  
  module.exports = { listar, localizar, criar, atualizar,remover}