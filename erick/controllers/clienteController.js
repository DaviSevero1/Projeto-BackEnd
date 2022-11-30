const { ObjectID } = require('bson');
const config =  require("../config/env.json");
const jwt =  require("jsonwebtoken");
const bcrypt =require("bcryptjs");
const Clientes = require('../models/clienteModel');

async function listar(req, res) {
    await Clientes.find({})
      .then((clientes) => {return res.json(clientes);})
      .catch((error) => {return res.status(500).json(error);});
  }
  
  async function consultar(req, res) {
    await Clientes.findOne({ _id: ObjectID(req.params.id) })
      .populate("Clientes")
      .then((cliente) => {
        if (cliente) return res.json(cliente);
        else return res.status(404).json("Cliente Não Localizado");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async function registrar(req, res) {
    console.log(req.body);
    const cliente = new Clientes(req.body);
    
    await cliente.save()
        .then(doc => {
            doc.senha = undefined;
            return res.status(201).json(doc);
        })
        .catch(error => {
            const msg = {};
            if (error.errors) {
                Object.values(error.errors).forEach(({ properties }) => {
                    msg[properties.path] = properties.message;
                });
            }
            if (error.code == 11000) {
                msg["erro"] = "Email já registrado";
            }
            console.log(error);
            return res.status(422).json(msg);
        });
}

async function login(req, res) {
    const { email, senha } = req.body;
    await Clientes.findOne({ email: email }).select('senha')
        .then(doc => {
            if (!doc) {
                return res.status(404).json({ erro: 'Usuário não cadastrado' });
            }
            const autentica = bcrypt.compareSync(senha, doc.senha);
            if (!autentica) {
                return res.status(400).json({ erro: 'Senha inválida'});
            }
            const token = jwt.sign({id : doc._id}, config.segredo, {expiresIn: '1d'});
            return res.json({email, token});
        })
        .catch(error => {
            return res.status(500).json(error);
        });
}

async function atualizar(req, res) {
    await Clientes.findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body, {
      runValidators: true,
    })
      .then((cliente) => {
        if (cliente) {
          return res.status(204).end();
        } else {
          return res.status(404).json("Cliente não localizado");
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
    await Clientes.findOneAndDelete({ _id: ObjectID(req.params.id) })
      .then((cliente) => {
        if (cliente) return res.status(204).end();
        else return res.status(404).json("Cliente Não localizado");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

module.exports = { listar, consultar, atualizar ,registrar, login, remover }
