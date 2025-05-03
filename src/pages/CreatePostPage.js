import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/Posts/PostForm';
import { createPost } from '../services/postService';
import useAuth from '../hooks/useAuth';

const CreatePostPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { token } = useAuth();

    const handleCreatePost = async (postData) => {
        setLoading(true);
        setError('');
        try {
            await createPost(postData, token);
            navigate('/my-posts');
        } catch (err) {
            setError(err.message || 'Failed to create post.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Create New Post</h2>
            <PostForm onSubmit={handleCreatePost} isLoading={loading} error={error} submitButtonText="Create Post" />
        </div>
    );
};

export default CreatePostPage;