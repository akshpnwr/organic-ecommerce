import express from 'express';
import { addProduct, getAllProducts, getProduct } from '../controller/product.controller.js';
import upload from '../middleware/img-upload.middleware.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/', upload.array("productImage"), addProduct);

export default router;