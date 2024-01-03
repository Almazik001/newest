import { useEffect, useMemo, useState } from 'react'
import PostList from './companent/PostList'
import PostForm from './companent/PostForm'
import MyButton from './companent/UI/Button/MyButton.jsx'
import PostFilter from "./companent/PostFilter.jsx";
import MyModal from "./companent/UI/Modal/MyModal.jsx";
import './App.css'
import { usePosts } from './hooks/usePosts.js'
import PostService from "./API/PostService.js";
import Loader from "./companent/UI/Loader/Loader.jsx";
import {useFetching} from "./hooks/useFetching.js";



function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)
  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages)
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className='App'>

      <MyButton style={{marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>

      <hr style={{margin: '15px 0px'}} />

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter}/>
        {postError &&
            <h1>Произошла ошибка ${postError}</h1>
        }
      {isPostLoading
          ?
          <div style={{display: "flex", justifyContent: 'center', marginTop: 50}} >
              <Loader/>
          </div>
          :
          <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      }
    </div>
  )
}

export default App
