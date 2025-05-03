import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/Posts/PostForm';
import { getPostById, updatePost } from '../services/postService';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import ErrorMessage from '../components/Common/ErrorMessage';

const EditPostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false); 
    const [error, setError] = useState('');

    const fetchPost = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const fetchedPost = await getPostById(postId, token);
            setPost(fetchedPost);
        } catch (err) {
            setError(err.message || 'Failed to fetch post details.');
            setPost(null);
        } finally {
            setLoading(false);
        }
    }, [postId, token]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    const handleUpdatePost = async (postData) => {
        setSubmitting(true);
        setError('');
        try {
            await updatePost(postId, postData, token);
            navigate('/my-posts');
        } catch (err) {
            setError(err.message || 'Failed to update post.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <h2>Edit Post</h2>
            {loading && <LoadingSpinner />}
            <ErrorMessage message={error} />
            {!loading && post && <PostForm onSubmit={handleUpdatePost} initialData={post} isLoading={submitting} error={error} submitButtonText="Update Post" />}
            {!loading && !post && !error && <p>Post not found or you do not have permission to edit it.</p>}
        </div>
    );
};

export default EditPostPage;