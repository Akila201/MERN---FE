import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    const { token } = useAuth();

    if (token) {
        return <Navigate to="/my-posts" replace />;
    }

    return (
        <div className="container">
            <LoginForm />
        </div>
    );
};

export default LoginPage;