var express = require('express');
const produtosController = require('../controllers/controllerproduto')
var router = express.Router();

router.get('/', produtosController.listar);

router.get(`/:id`,produtosController.exibir)
//cria um contato
  router.post(`/`, produtosController.criar);
//altera um contato
  router.put(`/:id`,produtosController.atualizar )
//deletar um contato
  router.delete(`/:id`,produtosController.deletar )

  module.exports = router;