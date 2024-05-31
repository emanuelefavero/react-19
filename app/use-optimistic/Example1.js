import { useOptimistic, useState } from 'react'
import { deliverMessage } from '@/app/actions.js'

export default function Component() {
  // This data could be fetched from the server
  const [message, setMessage] = useState('Hello')

  // Set the initial optimistic message
  const [optimisticMessage, setOptimisticMessage] = useOptimistic(message)

  const action = async (formData) => {
    // Optimistically update the UI with the message
    setOptimisticMessage(formData.get('message'))

    // Send the message to the server and update the UI with the response
    await deliverMessage(formData.get('message'))
    setMessage(formData.get('message'))
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
