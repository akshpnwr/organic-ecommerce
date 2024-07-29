import Product from "../model/product.model.js";
import { StatusCodes } from "http-status-codes";

export const getAllProducts = async (req, res) => {
    const products = await Product.find({});

    if (products) res.status(StatusCodes.OK).json({ totalProducts: products.length, products });
    else res.status(StatusCodes.NOT_FOUND).json({ message: 'Products not found' });

}

export const addProduct = async (req, res) => {

    const product = req.body;
    const result = await Product.create(product);
    if (!res) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid data}' });
    }
    else res.status(StatusCodes.OK).json(result);
}

export const getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product) res.status(StatusCodes.OK).json(product);
    else res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });

}
