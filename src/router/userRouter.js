const { Router } = require('express');
const { registerDoctor, registerPacient } = require('../controllers/users');
const router = Router();

router.post('/medico', registerDoctor);
router.post('/paciente', registerPacient);

module.exports = router;