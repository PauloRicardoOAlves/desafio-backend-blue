const knex = require('../database/conection');
const { userSchema } = require('../schemas/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function registerDoctor(req, res) {
    const { nome, n_registro, especialidade, senha } = req.body;

    try {

        const encriptedPassword = await encryptPassword(senha);

        const data = {nome, n_registro, especialidade, senha: encriptedPassword};

        const usuario = await writeDatabase("medicos", data);

        res.status(201).json(...usuario)

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno no servidor!" });
    };

};

async function registerPacient(req, res) {
    const { nome, cpf, senha } = req.body;

    try {

        const encriptedPassword = await encryptPassword(senha);

        const data = {nome, cpf, senha: encriptedPassword}

        const usuario = await writeDatabase("pacientes", data)
        
        res.status(201).json(...usuario)

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno no servidor!" });
    }
};

async function encryptPassword(password) {
    try {
        return bcrypt.hash(password, 10);
    } catch (error) {
        console.log(error.message);
    }
};

async function writeDatabase(table, {...object}) {

    const user = knex(table).insert(object).returning(["id", "nome"])

    return user;
}

module.exports = {
    registerDoctor,
    registerPacient
};