const express = require('express');
const carrinhoController = require('../controllers/carrinhos');
var router = express.Router();



/* GET users listing. lista todos os carrinhos*/
router.get('/', carrinhoController.listar);

/*GET ID lista um carrinho por id */
router.get('/:id', carrinhoController.localizar);

/*POST adiciona um carrinho*/
router.post('/:id', carrinhoController.criar);

/*POST adiciona um item ao carrinho*/
router.post('/:id/:item_id', carrinhoController.adicionarItem);

/*PUT atualiza um carrinho por id*/
router.put('/:id', carrinhoController.atualizar);

/*DELETE deleta um carrinho por id*/
router.delete('/:id', carrinhoController.deletar);

module.exports = router;