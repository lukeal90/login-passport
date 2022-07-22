let { DaoShoppingCart } = app.dbManagement;
DaoShoppingCart = new DaoShoppingCart();
const {Types: {ObjectId}} = require('mongoose');
class ShoppingCartService {

    static async create() {
        const id = ObjectId();
        return await DaoShoppingCart.saveOne({ _id: id } , {id});
    }

    static async getAll() {
        return await DaoShoppingCart.getAll();
    }    

    static async deleteCart(id) {
        return await DaoShoppingCart.delete(id);
    }
    
    static async getById(id) {
        return await DaoShoppingCart.getById(id)
    }  
    
    static async getAllProducts(id){
        return await DaoShoppingCart.getAllProducts(id);
    }    

    static async deleteProduct(idCart, idProduct){
        return await DaoShoppingCart.deleteProduct(idCart, idProduct);
    }     
    
    static async addProducts(idCart, products){
        return await DaoShoppingCart.addProducts(idCart,products);
    }
}    

module.exports = ShoppingCartService;