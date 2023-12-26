import { useMemo, useState } from 'react'
import PostList from './companent/PostList'
import PostForm from './companent/PostForm'
import MySelect from './companent/UI/Select/MySelect'
import MyInput from './companent/UI/Input/MyInput'
import MyButton from './companent/UI/Button/MyButton.jsx'
import PostFilter from "./companent/PostFilter.jsx";
import MyModal from "./companent/UI/Modal/MyModal.jsx";
import './App.css'
import { usePosts } from './companent/hooks/usePosts.js'



function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  return (
    <div className='App'>
      <MyButton style={{marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <hr style={{margin: '15px 0px'}} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}  />
      </MyModal>
      <PostFilter  filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} />
    </div>
  )
}

export default App
