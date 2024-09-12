'use client'

import { logUser } from '@/app/actions'
import PassHiddenFormFields from './PassHiddenFormFields'
import PassValuesWithHiddenFormFields from './PassValuesWithHiddenFormFields'

export default function Page() {
  return (
    <>
      <h1>Server Actions</h1>

      <p className='mb-2'>See server console for output after submitting</p>

      <form action={logUser}>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Submit</button>
      </form>

      <PassHiddenFormFields />
      <PassValuesWithHiddenFormFields />
    </>
  )
}
