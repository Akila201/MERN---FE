import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post, onDelete }) => {

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
            onDelete(post.id);
        }
    };

    return (
        <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p> 
            <div className="post-actions">
                <Link to={`/edit-post/${post.id}`} className="edit-button">Edit</Link>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>
        </div>
    );
};

export default PostItem;