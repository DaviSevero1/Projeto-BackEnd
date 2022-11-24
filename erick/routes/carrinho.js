const express = require("express");
const controllers = require('../controllers/carrinhos');
const router = express.Router();
const autentica = require('../middlewares/authMiddleware');


// rota pra listar os produtos
router.get("/carrinhos", controllers.listar);

// Consultar um unico produto
router.get("/carrinhos/:id",  controllers.consultar);

// Cadastrar produtos
router.post("/carrinhos",  controllers.criar);

//Adicionar ao carrinho
router.put("/carrinhos/:id/adicionar/:id_Produto", controllers.adicionar);

// Atualizar produto
router.put("/carrinhos/:id", controllers.atualizar);

// Deletar produtos
router.delete("/carrinhos/:id", autentica,controllers.remover);
module.exports = router;
