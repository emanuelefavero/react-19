'use client'

import { useFetch } from '@/hooks/useFetch'

export default function Page() {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  return (
    <>
      <h1>Custom Hooks</h1>

      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  )
}
