const pathPublic = process.cwd() + "/public/";
const User = require('../models/user');

class AuthController {

    static async register(req, res){
      res.send({ status: "ok", msg: "User registered" });
    };

    static async login(req, res){
      try {
        res.send({ status: "ok", msg: "User logged" });
      } catch (error) {
        res.send(error.message);
      }
    };
    static async logout(req, res ){
      try {
        req.logout((error) => {
          res.send({ msg: "logout success" });
        });
      } catch (error) {
        res.send(error.message);
      }
    };    
  
    static async failedLogin(req, res){
      res.status(400).send({ status: "error", msg: "Invalid credentials" });
    };

    static async failedRegister(req, res){
      res.status(400).send({ status: "error", msg: "Register fail" });
    };

    static async currentSession(req = request, res = response) {
      try {
        if (!req.user) {
          return res.status(400).send({ status: "error", msg: "Session doest exist" });
        }
        res.send({ status: "ok", msg: req.user });
      } catch (error) {
        res.send(error.message);
      }
    };    

}    

module.exports = AuthController;