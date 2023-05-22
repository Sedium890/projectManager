import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    },  []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products');
            console.log('Products response:', response.data); // Log the response data because I cant even
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:8000/api/products/${productId}`);
//  ---------------------------------------------------------------------------------Remove the deleted product from the state
            setProducts(products.filter((product) => product._id !== productId));
        }   catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
        <h2>Product List</h2>
        {products.map((product) => (
            <div key={product._id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
                <hr />
            </div>
        ))}
        </div>
    );
};

export default ProductList;
