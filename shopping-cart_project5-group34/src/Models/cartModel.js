const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const cartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "ShoppingCartProject_user",
        required: true,
        unique: true
    },
    items: {
        type: [Object],
        required: true,
        
    },
    totalPrice: {
        type: Number,
        default: 0,
        trim: true
        

    },
    totalItems: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('ShoppingCartProject_cart', cartSchema);