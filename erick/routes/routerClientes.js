const express = require("express");
const controller = require('../controllers/clienteController');
const autentica = require('../middlewares/authMiddleware');

const router = express.Router();

//listar todos os clientes
router.get('/admin/:id/clientes',  controller.listar);

// consultar um cliente por id
router.get('/clientes/:id', controller.consultar);

//registrar um cliente
  router.post('/clientes', controller.registrar);

//logar um cliente
  router.post('/clientes/login', controller.login);

//altera um cliente
  router.put('/clientes/:id', autentica, controller.atualizar );

//deletar um cliente
  router.delete('/clientes/:id', autentica,controller.remover);


  module.exports = router;