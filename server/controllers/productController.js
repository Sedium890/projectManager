const Product = require('../models/Product');

// Create a new product
const createProduct = (req, res) => {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
        return res.status(400).json({ success: false, error: 'Title, description, and price are required' });
    }

    const product = new Product({ title, description, price });

    product.save()
        .then((savedProduct) => {
            res.status(201).json({ success: true, data: savedProduct });
        })
        .catch((error) => {
            console.error('Error creating product:', error);
            res.status(500).json({ success: false, error: 'Server Error' });
        });
};

// Get a product by ID
const getProduct = (req, res) => {
    const productId = req.params.id;

    Product.findById(productId)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ success: false, error: 'Product not found' });
        }

            res.status(200).json({ success: true, data: product });
        })
        .catch((error) => {
            console.error('Error fetching product:', error);
            res.status(500).json({ success: false, error: 'Server Error' });
        });
};

// Update a product by ID
const updateProduct = (req, res) => {
    const productId = req.params.id;
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
        return res.status(400).json({ success: false, error: 'Title, description, and price are required' });
    }

    Product.findById(productId)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ success: false, error: 'Product not found' });
            }

            product.title = title;
            product.description = description;
            product.price = price;

            return product.save();
        })
        .then((updatedProduct) => {
            res.status(200).json({ success: true, data: updatedProduct });
        })
        .catch((error) => {
            console.error('Error updating product:', error);
            res.status(500).json({ success: false, error: 'Server Error' });
        });
};

// Delete a product by ID
const deleteProduct = (req, res) => {
    const productId = req.params.id;

    Product.findByIdAndRemove(productId)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ success: false, error: 'Product not found' });
            }

            res.status(200).json({ success: true, data: {} });
        })
        .catch((error) => {
            console.error('Error deleting product:', error);
            res.status(500).json({ success: false, error: 'Server Error' });
        });
};

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
};
