import React, { useState } from 'react';
import '../styles/ProductForm.css'
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a POST request to the server to create the product
        fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            price,
            description,
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Log the created product to the console
            setSuccessMessage('Entry successful'); // Set the success message
            setTitle(''); // Reset 
            setPrice(''); // Reset 
            setDescription(''); // Reset
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handleGoToProductList = () => {
        navigate('/products');
    };

    const handleGoToHome = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <form className='product-form' onSubmit={handleSubmit}>
            {successMessage && <p>{successMessage}</p>}
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
            
            <button type="submit">Create Product</button>
            </form>
            <div className='container'>
                <button className='button' onClick={handleGoToProductList}>Go to Product List</button>
                <button className='button' onClick={handleGoToHome}>Go Home</button>
            </div>
        </div>
    );
};

export default ProductForm;
