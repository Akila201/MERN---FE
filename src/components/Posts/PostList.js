import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onDelete }) => {
    if (!posts || posts.length === 0) {
        return <p>No posts found. Why not create one?</p>;
    }

    return (
        <div className="post-list">
            {posts.map(post => (
                <PostItem key={post.id} post={post} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default PostList;