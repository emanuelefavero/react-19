'use client'

import React, { useState, useCallback } from 'react'
import type { Message } from '@/types/message'

async function submitForm(): Promise<Message> {
  // Simulate a server action
  // TIP: To use a server action in a client component, you need to put the action in a separate file (e.g. app/actions) and add the 'use server' flag at the top of the file
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Action completed' })
    }, 1000)
  })
}

export default function Component() {
  const [formState, setFormState] = useState<Message | null>(null)
  const [isPending, setIsPending] = useState(false)

  const formAction = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setIsPending(true)

      try {
        const result = await submitForm()
        setFormState(result)
      } catch (error) {
        console.error(error)
        setFormState({ message: 'Failed to complete action' })
      }

      setIsPending(false)
    },
    []
  )

  return (
    <>
      <form onSubmit={formAction}>
        <button
          type='submit'
          disabled={isPending}
          className={isPending ? 'bg-slate-500 hover:bg-slate-500' : ''}
        >
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {formState && <p>{formState.message}</p>}
    </>
  )
}
