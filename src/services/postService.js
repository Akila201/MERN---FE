import axiosInstance from '../api/axiosConfig';

const getMyPosts = async () => {
    console.log('Fetching posts from API');
    try {
        const response = await axiosInstance.get('/posts');
        return response.data.map(post => ({ ...post, id: post._id }));
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to fetch posts';
        console.error('Get My Posts API error:', error.response?.data || error);
        throw new Error(message);
    }
};

const getPostById = async (id) => {
    console.log(`Fetching post ${id} from API`);
    try {
        const response = await axiosInstance.get(`/posts/${id}`);
        const post = response.data;
        return { ...post, id: post._id };
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to fetch post details';
        console.error('Get Post By ID API error:', error.response?.data || error);
        throw new Error(message);
    }
}

const createPost = async (postData) => {
    console.log('Creating post via API:', postData); 
    try {
        const response = await axiosInstance.post('/posts', postData);
        // Map _id to id
        const newPost = response.data;
        return { ...newPost, id: newPost._id };
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to create post';
        console.error('Create Post API error:', error.response?.data || error);
        throw new Error(message);
    }
};

const updatePost = async (id, postData) => {
    console.log(`Updating post ${id} via API:`, postData);
    try {
        const response = await axiosInstance.put(`/posts/${id}`, postData);
        const updatedPost = response.data;
        return { ...updatedPost, id: updatedPost._id };
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to update post';
        console.error('Update Post API error:', error.response?.data || error);
        throw new Error(message);
    }
};

const deletePost = async (id) => {
    console.log(`Deleting post ${id} via API`);
    try {
        const response = await axiosInstance.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to delete post';
        console.error('Delete Post API error:', error.response?.data || error);
        throw new Error(message);
    }
};

export { getMyPosts, getPostById, createPost, updatePost, deletePost };