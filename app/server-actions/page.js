'use client'

import { logUser } from '@/app/actions'

export default function Page() {
  return (
    <>
      <h1>Server Actions</h1>

      <form action={logUser}>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
