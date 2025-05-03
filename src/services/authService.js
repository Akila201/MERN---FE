import axiosInstance from '../api/axiosConfig';

const loginUser = async (email, password) => {
    console.log('Attempting login for:', email);
    try {
        const response = await axiosInstance.post('/login', { email, password });
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Login failed';
        console.error('Login API error:', error.response?.data || error);
        throw new Error(message);
    }
};

export { loginUser };