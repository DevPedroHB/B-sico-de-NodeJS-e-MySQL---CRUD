const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController.js');

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);

module.exports = router;