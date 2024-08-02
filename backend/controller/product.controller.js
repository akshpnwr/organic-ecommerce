import Product from "../model/product.model.js";
import { StatusCodes } from "http-status-codes";

export const getAllProducts = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit, 10) || 0;
        const sortField = req.query.sortField || 'createdAt';
        const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
        const category = req.query.category || '';
        const minPrice = parseFloat(req.query.minPrice) || 0;
        const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_SAFE_INTEGER;
        const minRating = parseFloat(req.query.minRating) || 0;

        const filter = {
            ...(category && { category }),
            price: { $gte: minPrice, $lte: maxPrice },
            rating: { $gte: minRating }
        };

        const products = await Product.find(filter).limit(limit).sort({ [sortField]: sortOrder });
        res.status(StatusCodes.OK).json({ totalProducts: products.length, products });
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ message: 'Products not found' });
    }
}

export const addProduct = async (req, res) => {

    try {
        const product = req.body;
        const img = req.file.path;

        const newProduct = {
            ...product,
            img
        }
        const result = await Product.create(newProduct);
        res.status(StatusCodes.OK).json({ message: 'Product added successfully', product: result });
    }
    catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid data' });
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log('get product', product);

    if (product) res.status(StatusCodes.OK).json({ product });
    else res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });

}
