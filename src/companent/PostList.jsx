import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts}) => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem post={post} />
            ))}
        </div>
    );
};

export default PostList;