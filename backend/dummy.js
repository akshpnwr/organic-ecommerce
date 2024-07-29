import mongoose from 'mongoose';
import Product from './model/product.model.js'; // Adjust the import path as necessary
import dotenv from 'dotenv';

dotenv.config();

const dummyProducts = [
    {
        name: 'Organic Apple',
        price: 1.99,
        description: 'Fresh organic apples from the farm.',
        category: 'Fruits',
        rating: 5,
        createdAt: new Date()
    },
    {
        name: 'Whole Wheat Bread',
        price: 2.49,
        description: 'Healthy whole wheat bread.',
        category: 'Bakery',
        rating: 4.5,
        createdAt: new Date()
    },
    {
        name: 'Almond Milk',
        price: 3.99,
        description: 'Organic almond milk, unsweetened.',
        category: 'Beverages',
        rating: 4,
        createdAt: new Date()
    },
    {
        name: 'Organic Carrots',
        price: 1.29,
        description: 'Crunchy organic carrots.',
        category: 'Vegetables',
        rating: 4.5,
        createdAt: new Date()
    },
    {
        name: 'Free-Range Eggs',
        price: 4.99,
        description: 'A dozen free-range eggs.',
        category: 'Dairy',
        rating: 4,
        createdAt: new Date()
    }
];

// Function to insert dummy data into the database
const insertDummyData = async () => {
    try {
        await Product.insertMany(dummyProducts);
        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
};

// Connect to MongoDB and insert dummy data
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        insertDummyData();
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });