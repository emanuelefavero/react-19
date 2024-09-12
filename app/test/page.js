'use client'

import { useState } from 'react'

export default async function Page() {
  const [items, setItems] = useState([{ id: 1, text: 'Item 1' }])

  async function formAction(formData) {
    const newItem = formData.get('item')
    setItems((items) => [...items, { id: items.length + 1, text: newItem }])
  }

  return (
    <>
      <h1>Items</h1>

      <form action={formAction}>
        <input type='text' name='item' placeholder='Add todo...' />
        <button type='submit'>Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}
