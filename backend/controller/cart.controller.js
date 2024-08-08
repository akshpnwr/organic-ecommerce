import Cart from "../model/cart.model.js";
import Product from "../model/product.model.js";

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.product');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const addItemToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            cart = new Cart({ userId: req.params.userId, items: [], subTotal: 0 });
        }

        const itemIndex = cart.items.findIndex(item => item.product.equals(productId));
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        cart.subTotal = cart.items.reduce((acc, item) => acc + product.price * item.quantity, 0);
        await cart.save();

        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const removeItemFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(item => !item.product.equals(req.params.productId));
        cart.subTotal = cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateItemQuantity = async (req, res) => {
    const { quantity } = req.body;

    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const item = cart.items.find(item => item.product.equals(req.params.productId));
        if (!item) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        item.quantity = quantity;
        cart.subTotal = cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = [];
        cart.subTotal = 0;

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}