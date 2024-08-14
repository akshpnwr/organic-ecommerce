import express from 'express'
import { addOrder, getOrders } from '../controller/order.controller.js';
const router = express.Router()

router.get('/:userId', getOrders);
router.post('/:userId/add', addOrder);

export default router;