const express = require("express");
const controllers = require('../controllers/pedidos');
const autenticar = require("../middlewares/authMiddleware")

const router = express.Router();



// rota pra listar os produtos
router.get("/clientes/:id/pedidos", autenticar,controllers.listar);

// Consultar um unico produto
router.get("/clientes/:id/pedidos/:id", autenticar,controllers.consultar);

// Cadastrar produtos
router.post("/carrinhos/:id_carrinho/pedido/", autenticar,controllers.criar);

// Atualizar produto
router.put("/clientes/:id/pedidos/:id", autenticar,controllers.atualizar);

// Deletar produtos
router.delete("/clientes/:id/pedidos/:id", autenticar,controllers.remover);

module.exports = router;
