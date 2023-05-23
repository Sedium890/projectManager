import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../styles/ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className='product-detail-container'>
            <h2 className='product-detail-title'>Product Detail</h2>
            {product ? (
                <div className='product-detail-content'>
                    <h3 className='product-detail-subtitle'>{product.title}</h3>
                    <p className='product-detail-description'>{product.description}</p>
                    <p className='product-detail-price'>Price: ${product.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/products" className='product-detail-link'>Back to Product List</Link>
        </div>
    );
};

export default ProductDetail;
