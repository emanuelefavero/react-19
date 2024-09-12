'use client'

import { useActionState } from 'react'

async function submitForm(formData) {
  const name = formData.get('name')

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: `Hello, ${name}` })
    }, 1000)
  })
}

async function action(previousState, formData) {
  try {
    const result = await submitForm(formData)
    return result
  } catch (error) {
    return { message: 'Failed to complete action' }
  }
}

const initialState = {
  message: '',
}

export default function Page() {
  const [state, dispatch, isPending] = useActionState(action, initialState)

  return (
    <>
      <h1>Test useActionState</h1>

      <form action={dispatch}>
        <input type='text' name='name' placeholder='Name' />
        <button
          type='submit'
          disabled={isPending}
          className={isPending ? 'bg-slate-500 hover:bg-slate-500' : ''}
        >
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {state && <p>{state.message}</p>}
    </>
  )
}
