import { useState } from 'react'
import PostItem from './companent/PostItem'
import PostList from './companent/PostList'
import MyButton from './companent/UI/Button/MyButton'
import MyInput from './companent/UI/Input/MyInput'
import PostForm from './companent/PostForm'
import MySelect from './companent/UI/Select/MySelect'
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
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect 
            defaultValue="Сортировка"
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
            ]}
        />
      </div>
      {posts.length !== 0 
      ?
      <PostList remove={removePost} posts={posts} />
      :
      <h1 style={{textAlign: 'center'}} >
        Посты не найдены!
      </h1>
      }
    </div>
  )
}

export default App
