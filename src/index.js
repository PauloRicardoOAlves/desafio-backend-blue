const express = require('express');
const app = express();
const router = require('./router/router');

require('dotenv').config();

app.use(express.json());
app.use(router)

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log(`servidor rodando na porta ${process.env.SERVER_PORT || 3000}`)
})