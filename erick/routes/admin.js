const express = require("express");
const controller = require('../controllers/adminController');
const autentica = require('../middlewares/authMiddleware');

const router = express.Router();


// listar admins
router.get('/admin', autentica, controller.listar);

//exibir um admin
router.get('/admin/:id',autentica, controller.consultar);

//registrar um admin
  router.post('/admin/registrar',  controller.registrar);

//logar um admin
  router.post('/admin/login',  controller.login);

//altera um admin
  router.put('/admin/:id', autentica, controller.atualizar );
  
//deletar um admin
  router.delete('/admin/:id', autentica, controller.remover );

  module.exports = router;