import { useOptimistic, useState } from 'react'
import { deliverMessage } from '@/app/actions'

export default function Component() {
  // This data could be fetched from the server
  const [message, setMessage] = useState('Hello')

  // Set the initial optimistic message
  const [optimisticMessage, setOptimisticMessage] = useOptimistic(message)

  const action = async (formData: FormData) => {
    const messageText = formData.get('message') as string

    // Optimistically update the UI with the message
    setOptimisticMessage(messageText)

    // Send the message to the server and update the UI with the response
    await deliverMessage(messageText)
    setMessage(messageText)
  }

  return (
    <>
      <h2>Example 1</h2>

      <p className='mb-2'>{optimisticMessage}</p>
      <form action={action}>
        <input
          type='text'
          name='message'
          placeholder='Message...'
          className='mr-2'
        />

        <button type='submit'>Send Message</button>
      </form>
    </>
  )
}
