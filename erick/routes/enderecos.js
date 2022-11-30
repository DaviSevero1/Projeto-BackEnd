const express = require("express");
const controllers = require('../controllers/enderecos');
const autenticar = require('../middlewares/authMiddleware');

const router = express.Router();


// rota pra listar os endereco
router.get("/clientes/:id/enderecos", autenticar, controllers.listar);

// Consultar um unico endereco
router.get("/clientes/:id/enderecos/:id",  autenticar, controllers.consultar);

// Criar endereco
router.post("/clientes/:id/enderecos",  autenticar, controllers.criar);

// Atualizar endereco
router.put("/clientes/:id/enderecos/:id", autenticar, controllers.atualizar);

// Deletar endereco
router.delete("/clientes/:id/enderecos/:id", autenticar,controllers.remover);

module.exports = router;
