import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import CreatePostPage from '../pages/CreatePostPage';
import MyPostsPage from '../pages/MyPostsPage';
import EditPostPage from '../pages/EditPostPage';
import ProtectedRoute from './ProtectedRoute';
import Navbar from '../components/Navigation/Navbar';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/my-posts" element={<MyPostsPage />} />
                    <Route path="/create-post" element={<CreatePostPage />} />
                    <Route path="/edit-post/:postId" element={<EditPostPage />} />
                </Route>
                <Route path="/" element={<Navigate to="/my-posts" replace />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;