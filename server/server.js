const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const connectDB = require("./config/db")
connectDB()

app.use(cors());
app.use(express.json());



// Set up routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
