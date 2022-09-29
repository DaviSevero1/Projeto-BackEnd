const express = require("express");
const controllers = require('../controllers/enderecos');
const router = express.Router();



// rota pra listar os produtos
router.get("/enderecos", controllers.listar);

// Consultar um unico produto
router.get("/enderecos/:id", controllers.localizar);

// Cadastrar produtos
router.post("/enderecos", controllers.criar);

// Atualizar produto
router.put("/enderecos/:id", controllers.atualizar);

// Deletar produtos
router.delete("/enderecos/:id", controllers.remover);
module.exports = router;
