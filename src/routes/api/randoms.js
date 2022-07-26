const { RandomController } = require('../../controllers');

module.exports = router => {
    router.get("/", RandomController.bigRandom);
    return router;
};
