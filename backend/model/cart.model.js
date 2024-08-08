import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, default: 1 }
});

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    items: [CartItemSchema],
    subTotal: { type: Number, default: 0 }
}, {
    timestamps: true
});

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
