import express from 'express';
import { addProduct, getAllProducts, getProduct } from '../controller/product.controller.js';
import upload from '../middleware/img-upload.middleware.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/', upload.single("img"), addProduct);

export default router;