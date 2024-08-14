import Cart from "../model/cart.model.js";
import Order from "../model/order.model.js";

export const getOrders = async (req, res) => {
    const { userId } = req.params;

    try {
        // Fetch all orders for the user
        const orders = await Order.find({ userId });

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        // Send success response
        res.status(200).json(orders);
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
};

export const addOrder = async (req, res) => {
    const { userId } = req.params;
    const { name, city, postalCode, address, email } = req.body

    try {
        // Fetch the cart for the user
        const cart = await Cart.findOne({ userId })

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Calculate the total price
        const shipping = 1.5;
        const tax = 2;
        const total = cart.subTotal + shipping + tax;

        // Create a new order
        const newOrder = new Order({
            userId,
            name,
            city,
            postalCode,
            address,
            email,
            items: cart.items,
            total,
            createdAt: new Date()
        });

        console.log(newOrder);

        // Save the order to the database
        const savedOrder = await newOrder.save();

        // Clear the cart after order is placed
        cart.items = [];
        await cart.save();

        // Send success response
        res.status(201).json(savedOrder);
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
}
