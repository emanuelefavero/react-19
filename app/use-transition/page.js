'use client'

import { useState, useTransition } from 'react'

export default function Page() {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)

    startTransition(() => {
      // Simulate a slow process
      const newList = []
      const LIST_SIZE = 10000 // ? Adjust this value for your system
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(value)
      }
      setList(newList)
    })
  }

  return (
    <>
      <h1>useTransition</h1>

      <p className='mb-4'>
        useTransition is a hook that lets you mark state updates as low
        priority. This is useful when you have slow updates that can be deferred
        to keep the interface responsive.
      </p>

      <input
        type='text'
        value={input}
        onChange={handleChange}
        placeholder='Type something...'
        className='mb-4'
      />
      <p>Input value: {input}</p>
      <ul>
        {isPending
          ? 'Loading...'
          : list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  )
}
