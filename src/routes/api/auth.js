const { AuthController } = require('../../controllers');
const passport = require('passport');

module.exports = router => {
    router.get("/logout", AuthController.logout);
    router.post("/register",passport.authenticate("register", { failureRedirect: "/failedRegister" }),AuthController.register);
    router.post("/login", passport.authenticate("login", { failureRedirect: "/failedLogin" }), AuthController.login);
    router.get("/failedRegister", AuthController.failedRegister);
    router.get("/failedLogin", AuthController.failedLogin);
    router.get("/currentSession", AuthController.currentSession);
    return router;
};
