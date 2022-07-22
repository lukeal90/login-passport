const mongoose = require('mongoose');

const {
    Schema,
    Types: { ObjectId }
} = mongoose;

const ProductSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },    
    title: {
        type: String
    },
    description: {
        type: String
    },    
    price: {
        type: Number
    },
    thumbnail: {
        type: String
    },
    stock:{
        type: String,
        required: false,
    },    

}, {
    collection: 'products',
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Product', ProductSchema);