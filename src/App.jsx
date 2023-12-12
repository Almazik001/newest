import { useState } from 'react'
import PostItem from './companent/PostItem'
import PostList from './companent/PostList'
import './App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "dasd", body: "dsadsa"}
  ])


  return (
    <div className='App'>
      <form className='form' >
        <input type="text" placeholder='Введите название поста'/>
        <input type="text" placeholder='Введите описание поста'/>
        <button>Добавить</button>
      </form>
      <PostList posts={posts} />
    </div>
  )
}

export default App
