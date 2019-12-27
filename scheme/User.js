const db = require('../config/db');

module.exports = db.defineModel('users', {
  id: {
    type: db.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  account: {
    type: db.STRING(100),
    unique: true,
  },
  password: db.STRING(100),
  name: db.STRING(100),
  gender: db.STRING(10),
  avatar: db.STRING(150),
});