import React, { useState } from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({ title:'', body:''})

    const AddNewPost = (e) => {
        e.preventDefault();
        const newPost = {
        ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form className='form' >
            <MyInput 
                value={post.title}
                type="text" 
                placeholder='Введите название поста'
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput 
                value={post.body}
                type="text" 
                placeholder='Введите описание поста'
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={AddNewPost}>Добавить</MyButton>
        </form>
    );
};

export default PostForm;