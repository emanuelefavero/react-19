'use client'

import { useOptimistic, useState, useRef } from 'react'
import { deliverMessage } from '@/app/actions.js'

function Thread({ messages, sendMessage }) {
  const formRef = useRef()

  async function formAction(formData) {
    addOptimisticMessage(formData.get('message'))
    formRef.current.reset()
    await sendMessage(formData)
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  )

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
          {/* TIP: The !! operator converts any value to a boolean. It is used here to make sure the sending value always outputs true or false even if other values are assigned to it */}
        </div>
      ))}

      <form action={formAction} ref={formRef}>
        <input type='text' name='message' placeholder='Message...' />
        <button type='submit'>Send Message</button>
      </form>
    </>
  )
}

export default function Page() {
  const [messages, setMessages] = useState([
    { text: 'Hello', sending: false, key: 1 },
  ])

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'))
    setMessages((messages) => [...messages, { text: sentMessage }])
  }

  return (
    <>
      <h1>useOptimistic</h1>

      <Thread messages={messages} sendMessage={sendMessage} />
    </>
  )
}
