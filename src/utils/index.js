const bcrypt = require("bcrypt");

const argv = require("yargs")
  .options({
    p: {
      alias: "port",
      type: "number",
      describe: "Puerto a utilizar",
    },
  })
  .check((argv, options) => {
    if (argv.p && isNaN(argv.p)) {
      throw "El puerto tiene que ser un número";
    }
    return true;
  }).argv;

const isValidPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

module.exports = {
  isValidPassword,
  createHash,
  argv
};