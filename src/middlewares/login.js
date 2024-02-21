const knex = require('../database/conection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function login(req, res) {
    const { cpf, n_registro, senha } = req.body;
    let user = '';

    try {

        if (cpf) {
            user = await knex('pacientes').where({ cpf }).first();
        } else if (n_registro) {
            user = await knex('medicos').where({ n_registro }).first();
        }

        const passwordValidation = await bcrypt.compare(senha, user.senha)

        if(!passwordValidation){
            return res.status(401).json({mensagem: "O login e/ou a senha inválido!"});
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_PASS, {
            expiresIn: "3h"
        });

        const {senha: _, ...userReturn} = user;

        return res.status(200).json({usuario: userReturn, token});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno no servidor!" });
    }

}

module.exports = login;