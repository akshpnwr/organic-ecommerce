import express from 'express';
import { addItemToCart, clearCart, getCart, removeItemFromCart, updateItemQuantity } from '../controller/cart.controller.js';

const router = express.Router();

router.get('/:userId', getCart);
router.post('/:userId/add', addItemToCart);
router.delete('/:userId/remove/:productId', removeItemFromCart);
router.put('/:userId/update/:productId', updateItemQuantity);
router.delete('/:userId/clear', clearCart);

export default router;
