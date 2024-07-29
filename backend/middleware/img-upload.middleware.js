import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

import dotenv from 'dotenv'
dotenv.config()

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Replace with your cloud name
    api_key: process.env.CLOUD_API_KEY, // Replace with your API key
    api_secret: process.env.CLOUD_API_SECRET, // Replace with your API secret
});

// Configure Multer to use Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products', // Folder to store images in Cloudinary
        allowedFormats: ['jpg', 'png'],
    },
});

const upload = multer({ storage });

export default upload;