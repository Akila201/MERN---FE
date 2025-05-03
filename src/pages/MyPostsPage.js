import React, { useState, useEffect, useCallback } from 'react';
import PostList from '../components/Posts/PostList';
import { getMyPosts, deletePost } from '../services/postService';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import ErrorMessage from '../components/Common/ErrorMessage';

const MyPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { token } = useAuth();

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const fetchedPosts = await getMyPosts(token);
            setPosts(fetchedPosts);
        } catch (err) {
            setError(err.message || 'Failed to fetch posts.');
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            fetchPosts();
        } else {
            setError("Please log in to view your posts."); 
            setLoading(false);
        }
    }, [fetchPosts, token]);

    const handleDeletePost = async (postId) => {
        setError('');
        try {
            await deletePost(postId, token);
            fetchPosts();
        } catch (err) {
            setError(err.message || 'Failed to delete post.');
        }
    };

    return (
        <div className="container">
            <h2>My Posts</h2>
            {loading && <LoadingSpinner />}
            <ErrorMessage message={error} />
            {!loading && !error && <PostList posts={posts} onDelete={handleDeletePost} />}
        </div>
    );
};

export default MyPostsPage;