import express from 'express';
import productRouter from './router/product.router.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());

app.use('/api/v1/products', productRouter);
app.use('/products', express.static('products'));

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.listen(PORT, async () => {
    await connectDB();
    console.log('Server is running on port 3000');
})