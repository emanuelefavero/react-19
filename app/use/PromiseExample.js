import { Suspense } from 'react'
import Message from './Message'

function fetchMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Hello 👋' })
    }, 1000)
  })
}

export default function PromiseExample() {
  const messagePromise = fetchMessage()

  return (
    <>
      <h2>Streaming data from the server to the client with the use hook</h2>

      <p className='mb-2'>
        Data can be streamed from the server to the client by passing a Promise
        as a prop from a Server Component to a Client Component.
      </p>

      <Suspense
        fallback={<p className='text-amber-500'>Waiting for message...</p>}
      >
        <Message messagePromise={messagePromise} />
      </Suspense>
    </>
  )
}
