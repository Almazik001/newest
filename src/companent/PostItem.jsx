import React from 'react';
import MyButton from './UI/Button/MyButton';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.number}. {props.post.title}</strong>

                <p>
                    {props.post.body}
                </p>
            </div>

            <div className="post-btns">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;