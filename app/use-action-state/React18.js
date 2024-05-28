'use client'

import React, { useState, useCallback } from 'react'

async function submitForm() {
  // Simulate a server action
  // TIP: To use a server action in a client component, you need to put the action in a separate file (e.g. app/actions.js) and add the 'use server' flag at the top of the file
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Action completed' })
    }, 1000)
  })
}

export default function Component() {
  const [formState, setFormState] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const formAction = useCallback(async (event) => {
    event.preventDefault()
    setIsPending(true)

    try {
      const result = await submitForm()
      setFormState(result)
    } catch (error) {
      setFormState({ message: 'Failed to complete action' })
    }

    setIsPending(false)
  }, [])

  return (
    <>
      <form onSubmit={formAction}>
        <button
          type='submit'
          disabled={isPending}
          className={isPending && 'bg-slate-500 hover:bg-slate-500'}
        >
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {formState && <p>{formState.message}</p>}
    </>
  )
}
