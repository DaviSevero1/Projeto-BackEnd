const enderecos = [
    {
        id: 1,
        cliente_id: 1,
        nome: "Casa",
        cidade: "Brasília",
        bairro: "Asa Sul",
        endereco: "SQS 402, bl B ",
        numero: "103",
        cep: "70330-515",
        tipo_residencia:"A",
        complento: "Avisar antes da entrega"
    },
    {
        id: 2,
        cliente_id: 1,
        nome: "Casa da Mamãe",
        cidade: "Brasília",
        bairro: "Asa Sul",
        endereco: "SQS 102, bl A ",
        numero: "103",
        cep: "70330-515",
        tipo_residencia:"A",
        complento: "Avisar antes da entrega"
    },
    {
        id: 3,
        cliente_id: 2,
        cidade: "Brasília",
        bairro: "Lago Sul",
        endereco: "SHIS  QI 16, con 5 ",
        numero: "3",
        cep: "70330-755",
        tipo_residencia:"C",
        complento: "Avisar antes da entrega"
    }
]

function listar(req, res, next){
    res.json(enderecos);
}

function localizar(req, res, next){
    const enderecoLocalizado = enderecos.find(endereco=> endereco.id === Number(req.params.id));
    if(!contatoLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    res.json(enderecoLocalizado);  
}

function criar(req, res, next){
    
    const novoEnderecos ={
        id: Enderecos[contatos.length-1].id+1,
        nome: req.body.nome,
        cliente_id: req.body.cliente_id,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        endereco:req.body.endereco,
        numero: req.body.numero,
        cep: req.body.cep,
        tipo_residencia:req.body.tipo_residencia,
        complento: req.body.complento,
    }

    contatos.push(novoEnderecos);
    res.status(201).json(novoEnderecos);
}

function atualizar(req, res, next){
    const enderecoLocalizado = enderecos.find(endereco => endereco.id === Number(req.params.id));
    if(!enderecoLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }

    contatoLocalizado.cliente_id = req.body.cliente_id,
    contatoLocalizado.nome = req.body.nome,
    contatoLocalizado.cidade = req.body.cidade,
    contatoLocalizado.bairro = req.body.bairro,
    contatoLocalizado.endereco = req.body.endereco,
    contatoLocalizado.numero = req.body.numero,
    contatoLocalizado.cep = req.body.cep,
    contatoLocalizado.tipo_residencia = req.body.tipo_residencia,
    contatoLocalizado.complento = req.body.complento,
    res.status(204).end();
}

function deletar(req, res, next){
    const localizado = enderecos.findIndex(endereco => endereco.id === Number(req.params.id));
    if(localizado < 0){
        return res.status(404).json("Não Localizado");
    }
    enderecos.splice(localizado, 1);
    
    res.status(204).end();  

}

module.exports = {listar, localizar, criar, atualizar, deletar};