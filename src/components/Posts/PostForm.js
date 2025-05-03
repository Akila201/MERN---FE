import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner';
import ErrorMessage from '../Common/ErrorMessage';

const PostForm = ({ onSubmit, initialData , isLoading, error, submitButtonText = "Submit" }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    console.log('PostForm rendering. isLoading:', isLoading);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setContent(initialData.content);
        }
    }, [initialData]);

    console.log("initialData", initialData)
    console.log("title", title)
    console.log("content", content)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert("Title and content cannot be empty.");
            return;
        }
        onSubmit({ title, content });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => {
                    console.log('Title onChange event fired. New value:', e.target.value);
                    setTitle(e.target.value);
                }}
                required
                disabled={isLoading}
            />
            <textarea
                placeholder="Post Content"
                value={content}
                onChange={(e) => {
                    console.log('Content onChange event fired. New value:', e.target.value);
                    setContent(e.target.value);
                }}
                style={{ color: "#333"}}
                rows="10"
                required
                disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : submitButtonText}
            </button>
            {isLoading && <LoadingSpinner />}
            <ErrorMessage message={error} />
        </form>
    );
};

export default PostForm;