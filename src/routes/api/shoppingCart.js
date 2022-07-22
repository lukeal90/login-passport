const { ShoppingCartController } = require('../../controllers');

module.exports = router => {
    router.post('/', ShoppingCartController.create);
    router.delete('/:id', ShoppingCartController.deleteCart);
    router.get('/:id/products', ShoppingCartController.getAllProducts);
    router.post('/:id/products', ShoppingCartController.addProducts);
    router.delete('/:id/products/:idProduct', ShoppingCartController.deleteProduct);
    router.get('/:id', ShoppingCartController.getById);
    return router;
};