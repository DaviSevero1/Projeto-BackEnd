const express = require("express");
const controllers = require('../controllers/carrinho');
const router = express.Router();



// rota pra listar os produtos
router.get("/carrinhos", controllers.listar);

// Consultar um unico produto
router.get("/carrinhos/:id", controllers.localizar);

// Cadastrar produtos
router.post("/carrinhos", controllers.criar);

// Atualizar produto
router.put("/carrinhos/:id", controllers.atualizar);

// Deletar produtos
router.delete("/carrinhos/:id", controllers.remover);
module.exports = router;
