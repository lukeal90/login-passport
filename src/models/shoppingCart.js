const mongoose = require('mongoose');
const ProductSchema = require('./product');

const {
    Schema,
    Types: { ObjectId }
} = mongoose;

const ShoppingCartSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },    
    products: [],
}, {
    collection: 'shoppingCarts',
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);