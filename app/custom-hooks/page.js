'use client'

import { useFetch } from '@/hooks/useFetch'

export default function Page() {
  const {
    data: posts,
    loading: loadingPosts,
    error: postsError,
  } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  if (postsError) console.error(postsError)

  return (
    <>
      <h1>Custom Hooks</h1>

      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
        {loadingPosts && <p>Loading...</p>}
      </ul>
    </>
  )
}
