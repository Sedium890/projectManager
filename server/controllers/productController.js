const Product = require('../models/Product');

module.exports = {

// -------------------------------------------------------------create------------------------------------------
    createNewProduct: (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err));
    },

// -------------------------------------------------------------GETALL-------------------------------------------
    findAllProducts: (req, res) => {
        Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err));
    },

// --------------------------------------------------------------GETONE------------------------------------------
    findOneSingleProduct: (req, res) => {
        Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
    },

// -------------------------------------------------------------UPDATE----------------------------------------

    updateExistingProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
    },


    // ----------------------------------------------------------------delete-----------------------------------------------
    deleteAnExistingProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
}