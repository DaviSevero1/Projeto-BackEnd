const express = require("express");
const productControllers = require('../controllers/controllerProdutos');
const autenticar = require("../middlewares/authMiddleware")

const routes = express.Router();

// rota pra listar os produtos
routes.get("/produtos", productControllers.listar);

// Consultar um unico produto
routes.get("/produtos/:id", productControllers.consultar);

// Cadastrar produtos
routes.post("/admin/:id/produtos", productControllers.criar);

// Atualizar produto
routes.put("/admin/:id/produtos/:id", productControllers.atualizar);

// Deletar produtos
routes.delete("/admin/:id/produtos/:id", productControllers.remover);



module.exports = routes;
