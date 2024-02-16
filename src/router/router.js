const { Router } = require('express');
const router = Router();

const userRouter = require('./userRouter');
const consultRouter = require('./consultRouter');

router.use('/usuario', userRouter);
router.use('/consulta', consultRouter);

module.exports = router;