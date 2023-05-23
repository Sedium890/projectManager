const ProductController = require('../controllers/productController');
module.exports = (app) => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products', ProductController.createNewProduct);
    app.get('/api/products/:id', ProductController.findOneSingleProduct);
    app.patch('/api/products/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
}