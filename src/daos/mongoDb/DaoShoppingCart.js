const ShoppingCartSchema = require('../../models/shoppingCart');
const DaoCrudMongo = require('./DaoCrudMongo');
const _ = require('lodash');
let DaoProduct = require('./DaoProduct')
DaoProduct = new DaoProduct();
class DaoShoppingCart extends DaoCrudMongo{

    constructor(){
        super(ShoppingCartSchema);
    }

    async getAllProducts(id){
        const cart = await this.getById(id);
        return cart.products;
    }

    async addProducts(idCart, products){
        let cart = await this.getById(idCart);

        for(const p of products){
            let product = await DaoProduct.getById(p);
            cart.products.push(product);
        }

        await this.updateById(idCart ,cart);    
        return "Se agregaron correctamente los pruductos";          
    } 
    
    async deleteProduct(idCart, idProduct) {
        let cart = await this.getById(idCart);
        
        if(!_.isNil(cart)){
            if(cart.products.some(p => p._id == idProduct)){
                const newProducts = cart.products.filter(p => p._id != idProduct);
                cart.products = newProducts;
                return this.updateById(idCart, cart);
            }
        }
        return null;
    }      

}

module.exports = DaoShoppingCart;