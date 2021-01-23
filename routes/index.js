var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');


router.get('/', mainController.index)

router.get('/detalles/:id?', mainController.detalles)


// router.get('/detalle/:id', mainController.detalle)

// router.get('/login', mainController.login)

// router.get('/operador', mainController.operador)



module.exports = router;
