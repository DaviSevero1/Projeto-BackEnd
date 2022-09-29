const express = require("express");
const productControllers = require('../controllers/controllerProdutos');
const routes = express.Router();

// rota pra listar os produtos
routes.get("/produtos", productControllers.listar);

// Consultar um unico produto
routes.get("/produtos/:id", productControllers.exibir);

// Cadastrar produtos
routes.post("/produtos", productControllers.criar);

// Atualizar produto
routes.put("/produtos/:id", productControllers.atualizar);

// Deletar produtos
routes.delete("/produtos/:id", productControllers.deletar);



module.exports = routes;
