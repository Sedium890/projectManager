import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchProduct();
    });

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            setProduct(response.data);
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.patch(`http://localhost:8000/api/products/${id}`, {
                title,
                price,
                description,
            });

            navigate(`/products/${id}`);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h2>Update Product</h2>
            {product ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit">Update Product</button>
                </form>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UpdateProduct;
