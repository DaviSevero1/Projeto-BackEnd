const { ObjectID } = require("bson");
const enderecos = require("../models/enderecoModel");
const Enderecos= require("../models/enderecoModel");

async function listar(req, res) {
  await Enderecos.find({})
    .then((enderecos) => {
      return res.json(enderecos);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

async function consultar(req, res) {
  await Enderecos.findOne({_id: ObjectID(req.params.id)})
  .then(endereco => {
      if(endereco) return res.json(endereco);
      else return res.status(404).json('Contato Não Localizado');
  })
  .catch(error => {return res.status(500).json(error) });
}

async function criar(req, res) {
  const enderecos = new Enderecos(req.body);
  await enderecos
    .save()
    .then(doc => {
      return res.status(201).json(doc);
    })
    .catch((error) => {
      const msgErro = {};
      if (error.errors) {
        Object.values(error.errors).forEach(({ properties }) => {
          msgErro[properties.path] = properties.message;
        });
      }
      return res.status(422).json(msgErro);
    });
}

async function atualizar(req, res) {
  await Enderecos.findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body, {
    runValidators: true,
  })
    .then((enderecos) => {
      if (enderecos) {
        return res.status(204).end();
      } else {
        return res.status(404).json("Endereco não localizado");
      }
    })
    .catch((error) => {
      const msgErro = {};
      Object.values(erro.errors).forEach(({ properties }) => {
        msgErro[properties.path] = properties.message;
      });
      return res.status(422).json(msgErro);
    });
}

async function remover(req, res) {
  await Enderecos.findOneAndDelete({ _id: ObjectID(req.params.id) })
    .then((enderecos) => {
      if (enderecos) return res.status(204).end();
      else return res.status(404).json("Endereco Não localizado");
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

module.exports = { listar, consultar, criar, atualizar, remover };
