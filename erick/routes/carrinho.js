const express = require("express");
const controllers = require('../controllers/carrinhos');
const autenticar = require('../middlewares/authMiddleware');

const router = express.Router();


// rota pra listar os carrinhos
router.get("/carrinhos", autenticar, controllers.listar);

// Consultar um unico carrinho
router.get("/carrinhos/:id",  autenticar, controllers.consultar);

// Criar carrinho
router.post("/carrinhos",  autenticar, controllers.criar);

//Adicionar ao carrinho
router.put("/carrinhos/:id_carrinho/adicionar/:id_Produto", autenticar, controllers.adicionar);

// Atualizar carrinho
router.put("/carrinhos/:id", autenticar, controllers.atualizar);

// Deletar carrinho
router.delete("/carrinhos/:id", autenticar,controllers.remover);
module.exports = router;
