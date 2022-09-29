let enderecos = [
    {
        id: 1,
        cliente_id : 1,
        nome: "Casa",
        cidade: "Brasília",
        bairro: "Asa Sul",
        logrdouro: "SQS 402, bl B ",
        numero: "103",
        cep: "70330-515",
        tipo_residencia:"A",
        complento: "Avisar antes da entrega"
    },
    {
        id : 2,
        cliente_id : 1,
        nome : "Casa da Mamãe",
        cidade : "Brasília",
        bairro : "Asa Sul",
        logradouro : "SQS 102, bl A ",
        numero : "103",
        cep : "70330-515",
        tipo_residencia :"A",
        complento : "Avisar antes da entrega"
    },
    {
        id : 3,
        cliente_id : 2,
        nome : "Casa",
        cidade : "Brasília",
        bairro : "Asa Norte",
        logradouro : "SQN 102, bl A ",
        numero : "203",
        cep : "70330-515",
        tipo_residencia :"A",
        complento : "Avisar antes da entrega"
    }
];
function listar (req, res,next) {
    res.json(enderecos);
  }
  
  function localizar (req, res,next) {
      const encontrado = enderecos.find(endereco => endereco.id === Number(req.params.id));
  
      if(!encontrado)
      {
          return res.status(404).json({msg:"Não encontrado"});
      }
      res.json(encontrado);
  }
  function criar (req, res, next) {
    const novoEndereco ={
        id : enderecos[enderecos.length-1].id+1,
        cliente_id : req.body.cliente_id,
        nome : req.body.nome,
        cidade : req.body.cidade,
        bairro : req.body.bairro,
        logradouro : req.body.logradouro,
        numero : req.body.numero,
        cep : req.body.cep,
        tipo_residencia :req.body.tipo_residencia,
        complento : req.body.complento,
        
    }

    pedidos.push(novoEndereco);
    res.status(201).json(novoEndereco);
  }
  

  function atualizar(req, res, next) {
    const enderecoLocalizado = enderecos.find(endereco => endereco.id === Number(req.params.id));
  if(!enderecoLocalizado)
  {
      return res.status(404).json("Não encontrado");
  }
        enderecoLocalizado.cliente_id = req.body.cliente_id,
        enderecoLocalizado.nome = req.body.nome,
        enderecoLocalizado.cidade = req.body.cidade,
        enderecoLocalizado.bairro = req.body.bairro,
        enderecoLocalizado.logradouro = req.body.logradouro,
        enderecoLocalizado.numero = req.body.numero,
        enderecoLocalizado.cep = req.body.cep,
        enderecoLocalizado.tipo_residencia = req.body.tipo_residencia,
        enderecoLocalizado.complento =  req.body.complento,
    res.status(204).json(enderecoLocalizado).end();
  
  }

  function remover(req, res, next) {
      const localizado = enderecos.findIndex(endereco => endereco.id === Number(req.params.id));
      if(localizado < 0){
          return res.status(404).json("Endereço Não Localizado");
      }
      enderecos.splice(localizado, 1);
      
      res.status(204).end();  
  }
  
  module.exports = { listar, localizar, criar, atualizar, remover}
  