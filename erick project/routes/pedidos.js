const express = require('express');
const pedidosController = require('../controllers/pedidos');
var router = express.Router();



/* GET users listing. lista todos os carrinhos*/
router.get('/pedidos', pedidosController.listar);

/*GET ID lista um carrinho por id */
router.get('/pedidosPorId/:id', pedidosController.localizar);

/*POST adiciona um item ao carrinho*/
router.post('/criarPedido/:id', pedidosController.criar);

/*PUT atualiza um carrinho por id*/
router.put('/atualizarPedido/:id', pedidosController.atualizar);

/*DELETE deleta um carrinho por id*/
router.delete('/deletarPedido/:id', pedidosController.deletar);

module.exports = router;