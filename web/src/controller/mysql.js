const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bili', 'root', '123123', {
  host: 'db',
  dialect: 'mysql'
});

module.exports = {
  checkConnect: async (ctx, next) => {
    try {
      await sequelize.authenticate();
      ctx.body = 'Connection has been established successfully.';
    } catch (error) {
      ctx.body = `Unable to connect to the database: ${error.message}`;
    }
  }
}