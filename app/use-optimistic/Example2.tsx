import { useOptimistic, useState, useRef } from 'react'
import { deliverMessage } from '@/app/actions'

type Message = {
  text: string
  sending: boolean
}

type Props = {
  messages: Message[]
  sendMessageToServer: (formData: FormData) => Promise<void>
}

function Messages({ messages, sendMessageToServer }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null)

  const action = async (formData: FormData) => {
    const message = formData.get('message') as string

    // Optimistically add the message to the UI
    addOptimisticMessage(message)
    formRef.current?.reset() // clear the form

    // Send the message to the server
    await sendMessageToServer(formData)
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages, // initial state that will be passed to optimisticMessages
    (prevState: Message[], newMessage: string) => [
      ...prevState,
      {
        text: newMessage, // newMessage = formData.get('message')
        sending: true, // this will be set to false after the server responds
      },
    ]
  )

  return (
    <>
      <h2>Example 2</h2>

      {optimisticMessages.map((message: Message, index: number) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}

      <form action={action} ref={formRef} className='mt-2'>
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

export default function Component() {
  const [messages, setMessages] = useState([{ text: 'Hello', sending: false }])

  // Call server action and update the UI with the response
  const sendMessageToServer = async (formData: FormData) => {
    const message = formData.get('message') as string
    const sentMessage = await deliverMessage(message)
    setMessages((messages) => [
      ...messages,
      { text: sentMessage, sending: false },
    ])
  }

  return (
    <>
      <Messages messages={messages} sendMessageToServer={sendMessageToServer} />
    </>
  )
}

/* TIP: The !! operator converts any value to a boolean. It is used here to make sure the sending value always outputs true or false even if other values are assigned to it */
