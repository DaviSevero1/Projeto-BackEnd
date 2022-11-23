var express = require('express');
const clienteController = require('../controllers/clienteController')
var router = express.Router();

router.get('/', clienteController.listar);

router.get(`/:id`,clienteController.exibir)
//cria um contato
  router.post(`/`, clienteController.criar);
//altera um contato
  router.put(`/:id`,clienteController.atualizar )
//deletar um contato
  router.delete(`/:id`,clienteController.deletar )

  module.exports = router;