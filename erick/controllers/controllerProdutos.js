const { ObjectID } = require("bson");
const { PromiseProvider } = require("mongoose");
const Produtos = require("../models/produtosModel");

async function listar(req, res) {
  await Produtos.find({})
    .then((produtos) => {
      return res.json(produtos);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

async function consultar(req, res) {
  await Produtos.findOne({_id: ObjectID(req.params.id)})
  .then(produto => {
      if(produto) return res.json(produto);
      else return res.status(404).json('Contato Não Localizado');
  })
  .catch(error => {return res.status(500).json(error) });
}

async function criar(req, res) {
  const produtos = new Produtos(req.body);
  await produtos
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
  await Produtos.findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body, {
    runValidators: true,
  })
    .then((produtos) => {
      if (produtos) {
        return res.status(204).end();
      } else {
        return res.status(404).json("Produto não localizado");
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
  await Produtos.findOneAndDelete({ _id: ObjectID(req.params.id) })
    .then((produtos) => {
      if (produtos) return res.status(204).end();
      else return res.status(404).json("Produto Não localizado");
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

module.exports = { listar, consultar, criar, atualizar, remover };
