const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "ShoppingCartProject_user",
        required: true,
        
    },
    items: {
        type: [Object],
        required: true,

    },
    totalPrice: {
        type: Number,
        trim: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    cancellable: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "completed", "cancelled"]
    },
    deletedAt: {
        type: Date
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model('ShoppingCartProject_Order', orderSchema);