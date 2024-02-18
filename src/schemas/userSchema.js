const joi = require('joi');

const loginShema = joi.object({
    matricula: joi.number().required().messages({
        "any.required": "Informe o nome para fazer o login",
        "number.base": "a matrícula não pode ficar em branco",
        "number.positive": "a matrícula precisa ser um número maior que zero"
    }),
    senha: joi.string().required().messages({
        "any.required": "Informe a senha para fazer o login",
        "string.empty": "A senha não pode ficar em branco",
      }),
})

module.exports = {
    loginShema
}