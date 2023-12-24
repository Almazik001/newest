import { useMemo, useState } from 'react'
import PostList from './companent/PostList'
import PostForm from './companent/PostForm'
import MySelect from './companent/UI/Select/MySelect'
import './App.css'
import MyInput from './companent/UI/Input/MyInput'

function App() {

  const [posts, setPosts] = useState([])

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('###')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className='App'>
      <PostForm create={createPost}  />
      <div>
        <MyInput 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск"
        />
        <MySelect 
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
            ]}
        />
      </div>
      {posts.length !== 0 
      ?
      <PostList remove={removePost} posts={sortedPosts} />
      :
      <h1 style={{textAlign: 'center'}} >
        Посты не найдены!
      </h1>
      }
    </div>
  )
}

export default App
