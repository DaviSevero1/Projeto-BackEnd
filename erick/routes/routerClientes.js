var express = require('express');
const clienteController = require('../controllers/controllerCliente')
var router = express.Router();

router.get('/clientes', clienteController.listar);

router.get('/clientes/:id',clienteController.exibir)
//cria um contato
  router.post('/clientes', clienteController.criar);
//altera um contato
  router.put('/clientes/:id',clienteController.atualizar )
//deletar um contato
  router.delete('/clientes/:id',clienteController.deletar )

  module.exports = router;