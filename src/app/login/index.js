

const { LOGIN } = require("./controllres/login-controller")
const { loginSchema } = require("./schemas/login-schema")
module.exports = async app => {

    app.route({
        method: 'POST',
        url: '/login',
        schema: loginSchema,
        handler: LOGIN
    })
}