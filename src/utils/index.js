const bcrypt = require("bcrypt");

const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

module.exports = {
  isValidPassword,
  createHash,
};