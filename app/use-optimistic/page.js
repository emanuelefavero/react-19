'use client'

import Example1 from './Example1.js'
import Example2 from './Example2.js'
import Example3 from './Example3.js'

export default function Page() {
  return (
    <>
      <h1>useOptimistic</h1>

      <p className='mb-2'>
        The <code>useOptimistic</code> hook lets you update the UI
        optimistically while waiting for the server response.
      </p>

      <Example1 />
      <Example2 />
      <Example3 />
    </>
  )
}
