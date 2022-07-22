const ProductModel = require('../../models/product');
const DaoCrudMongo = require('./DaoCrudMongo');
const {Types: {ObjectId}} = require('mongoose');

class DaoProduct extends DaoCrudMongo{

    constructor(){
        super(ProductModel)
    }
}

module.exports = DaoProduct;