
const loginRoutes = require('./login')

module.exports = async app => {
    app.register(loginRoutes, { prefix: '/user/v1' });
}