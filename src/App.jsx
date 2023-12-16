import { useState } from 'react'
import PostItem from './companent/PostItem'
import PostList from './companent/PostList'
import MyButton from './companent/UI/Button/MyButton'
import MyInput from './companent/UI/Input/MyInput'
import PostForm from './companent/PostForm'
import './App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "dasd", body: "dsadsa"}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  

  return (
    <div className='App'>
      <PostForm create={createPost}  />
      <PostList remove={removePost} posts={posts} />
    </div>
  )
}

export default App
