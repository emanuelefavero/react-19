'use client'

import { useState } from 'react'

const items = ['apple', 'banana', 'mango', 'orange']

export default function Page() {
  const [search, setSearch] = useState('')
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h1>Search</h1>

      <label htmlFor='search' className='mr-4'>
        Search:
      </label>
      <input
        type='search'
        placeholder='Search items...'
        id='search'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
