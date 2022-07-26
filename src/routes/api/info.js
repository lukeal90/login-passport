const { InfoController } = require('../../controllers');


module.exports = router => {
    router.get("/", InfoController.serverInfo);
    return router;
};