const express = require("express");
const controllers = require('../controllers/pedidos');
const router = express.Router();



// rota pra listar os produtos
router.get("/pedidos", controllers.listar);

// Consultar um unico produto
router.get("/pedidos/:id", controllers.localizar);

// Cadastrar produtos
router.post("/pedidos", controllers.criar);

// Atualizar produto
router.put("/pedidos/:id", controllers.atualizar);

// Deletar produtos
router.delete("/pedidos/:id", controllers.remover);
module.exports = router;
