const express = require('express');
const enderecosController = require('../controllers/enderecos');
var router = express.Router();



/* GET users listing. lista todos os carrinhos*/
router.get('/', enderecosController.listar);

/*GET ID lista um carrinho por id */
router.get('/:id', enderecosController.localizar);

/*POST adiciona um item ao carrinho*/
router.post('/:id', enderecosController.criar);

/*PUT atualiza um carrinho por id*/
router.put('/:id', enderecosController.atualizar);

/*DELETE deleta um carrinho por id*/
router.delete('/:id', enderecosController.deletar);

module.exports = router;