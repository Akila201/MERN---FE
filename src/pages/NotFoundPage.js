import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="container">
            <h2>Page Not Found</h2>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/my-posts" className="button">Go to My Posts</Link>
        </div>
    );
};

export default NotFoundPage;