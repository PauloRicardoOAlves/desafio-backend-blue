const { Router } = require('express');
const router = Router();

const userRouter = require('./userRouter');
const consultRouter = require('./consultRouter');
const login = require('../middlewares/login');

router.use('/usuario', userRouter);
router.use('/consulta', consultRouter);
router.post('/login', login);

module.exports = router;