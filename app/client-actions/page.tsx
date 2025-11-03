'use client'

import { useState } from 'react'

export default function Page() {
  const [name, setName] = useState('')

  // TIP: greet() is a client side "action"
  function greet(formData: FormData) {
    const name = formData.get('name') as string
    setName(name)
  }

  return (
    <>
      <h1>Client Form Submission</h1>

      <form action={greet}>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Search</button>
      </form>

      {name && <p>Hello {name}</p>}
    </>
  )
}
