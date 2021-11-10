const { Router } = require('express');
const { axios } = require('axios');
const dogsRequire = require('./dogs'); // cargo las rutas de dogs
const temperamentsRequire = require('./temperament'); // cargo las rutas de temperamento
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRequire); //Enrutado hacia dogs
router.use('/temperament', temperamentsRequire); //Enrutado hacia temperamentos

module.exports = router;
