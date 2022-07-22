const { ProductController } = require('../../controllers');
//const { validateAdmin } = require('../middleWares');

module.exports = router => {
    router.get('/:id?', ProductController.getByIdOrAll);
    router.post('/', ProductController.addProduct);
    router.put('/:id', ProductController.updateProduct);
    router.delete('/:id', ProductController.deleteProduct);
    router.get('/prueba/:id', ProductController.prueba);
    return router;
};