const { ObjectID } = require('bson');
const config =  require("../config/env.json");
const jwt =  require("jsonwebtoken");
const bcrypt =require("bcryptjs");
const Admins = require('../models/adminModel');

async function listar(req, res) {
    await Admins.find({})
      .then((admin) => {
        return res.json(admin);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  
  async function consultar(req, res) {
    await Admins.findOne({ _id: ObjectID(req.params.id) })
      .populate("Admins")
      .then((admin) => {
        if (admin) return res.json(admin);
        else return res.status(404).json("Produto Não Localizado");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

async function registrar(req, res) {
    const admin = new Admins(req.body);
    await admin.save()
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
  await Admins.findOne({ email: email }).select('senha')
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
    await Admins.findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body, {
      runValidators: true,
    })
      .then((admin) => {
        if (admin) {
          return res.status(204).end();
        } else {
          return res.status(404).json("Admin não localizado");
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
    await Admins.findOneAndDelete({ _id: ObjectID(req.params.id) })
      .then((admin) => {
        if (admin) return res.status(204).end();
        else return res.status(404).json("Admin Não localizado");
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

module.exports = { listar, consultar, atualizar ,registrar, login, remover }
