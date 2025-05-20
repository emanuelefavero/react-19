'use client'

import { useState } from 'react'

export default function Page() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)

    // Simulate a slow process
    const newList = []
    const LIST_SIZE = 6000 // ? Adjust this value for your system
    for (let i = 0; i < LIST_SIZE; i++) {
      newList.push(value)
    }
    setList(newList)
  }

  return (
    <>
      <h1>useTransition</h1>

      <input type='text' value={input} onChange={handleChange} />
      <p>Input: {input}</p>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
