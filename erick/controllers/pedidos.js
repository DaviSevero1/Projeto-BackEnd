const { ObjectID } = require("bson");
const Pedidos= require("../models/pedidosModel");

async function listar(req, res) {
  await Pedidos.find({})
    .then((pedidos) => {
      return res.json(pedidos);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

async function consultar(req, res) {
  await Pedidos.findOne({ _id: ObjectID(req.params.id) })
    .populate("Pedidos")
    .then((pedidos) => {
      if (pedidos) return res.json(pedidos);
      else return res.status(404).json("Pedido Não Localizado");
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

async function criar(req, res) {
  const pedido = new Pedidos(req.body);
  await pedido
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
  await Pedidos.findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body, {
    runValidators: true,
  })
    .then((pedidos) => {
      if (pedidos) {
        return res.status(204).end();
      } else {
        return res.status(404).json("Pedido não localizado");
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
  await Pedidos.findOneAndDelete({ _id: ObjectID(req.params.id) })
    .then((pedidos) => {
      if (pedidos) return res.status(204).end();
      else return res.status(404).json("Pedido Não localizado");
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

module.exports = { listar, consultar, criar, atualizar, remover };
