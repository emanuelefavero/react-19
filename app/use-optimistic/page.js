'use client'

import { useOptimistic, useState, useRef } from 'react'
import { deliverMessage } from '@/app/actions.js'

export default function Page() {
  const formRef = useRef()
  const [messages, setMessages] = useState([{ text: 'Hello', sending: false }])

  const sendMessageToServer = async (formData) => {
    const sentMessage = await deliverMessage(formData.get('message'))
    setMessages((messages) => [...messages, { text: sentMessage }])
  }

  const action = async (formData) => {
    addOptimisticMessage(formData.get('message'))
    formRef.current.reset()
    await sendMessageToServer(formData)
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (prevState, newMessage) => [
      ...prevState,
      {
        text: newMessage,
        sending: true,
      },
    ]
  )

  return (
    <>
      <h1>useOptimistic</h1>

      <p className='mb-2'>
        The <code>useOptimistic</code> hook lets you update the UI
        optimistically while waiting for the server response.
      </p>

      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}

      <form action={action} ref={formRef}>
        <input type='text' name='message' placeholder='Message...' />
        <button type='submit'>Send Message</button>
      </form>
    </>
  )
}

/* TIP: The !! operator converts any value to a boolean. It is used here to make sure the sending value always outputs true or false even if other values are assigned to it */
