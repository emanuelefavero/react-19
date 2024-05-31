'use client'

import { useOptimistic, useState, useRef } from 'react'
import { deliverMessage } from '@/app/actions.js'

function Messages({ messages, sendMessageToServer }) {
  const formRef = useRef()

  const action = async (formData) => {
    // Optimistically add the message to the UI
    addOptimisticMessage(formData.get('message'))
    formRef.current.reset() // clear the form

    // Send the message to the server
    await sendMessageToServer(formData)
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages, // initial state that will be passed to optimisticMessages
    (prevState, newMessage) => [
      ...prevState,
      {
        text: newMessage, // newMessage = formData.get('message')
        sending: true, // this will be set to false after the server responds
      },
    ]
  )

  return (
    <>
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

export default function Page() {
  const [messages, setMessages] = useState([{ text: 'Hello', sending: false }])

  // Call server action and update the UI with the response
  const sendMessageToServer = async (formData) => {
    const sentMessage = await deliverMessage(formData.get('message'))
    setMessages((messages) => [...messages, { text: sentMessage }])
  }

  return (
    <>
      <h1>useOptimistic</h1>

      <p className='mb-2'>
        The <code>useOptimistic</code> hook lets you update the UI
        optimistically while waiting for the server response.
      </p>

      <Messages messages={messages} sendMessageToServer={sendMessageToServer} />
    </>
  )
}

/* TIP: The !! operator converts any value to a boolean. It is used here to make sure the sending value always outputs true or false even if other values are assigned to it */
