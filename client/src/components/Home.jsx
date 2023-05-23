import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="container">
            <h1 className="heading">Welcome to the Homepage</h1>
            <p className="paragraph">This is your future Product List!</p>
            <Link to="/products">
                <button className="button">Go to Product List</button>
            </Link>
            <Link to="/create" className="button">Create Product</Link>
        </div>
    );
};

export default Home;
