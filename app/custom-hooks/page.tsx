'use client'

import { useFetch } from '@/hooks/useFetch'
import type { Post } from '@/types/posts'

export default function Page() {
  const {
    data: posts,
    loading: loadingPosts,
    error: postsError,
  } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')

  if (postsError) console.error(postsError)

  return (
    <>
      <h1>Custom Hooks</h1>

      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        {loadingPosts && <p>Loading...</p>}
      </ul>
    </>
  )
}
