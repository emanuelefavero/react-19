'use client'

import { useTransition } from 'react'

function action() {
  throw new Error('Example Error: An error occurred')
}

export default function Button() {
  const [pending, startTransition] = useTransition()

  return (
    <button
      disabled={pending}
      onClick={() => {
        startTransition(() => {
          action()
        })
      }}
    >
      Trigger Error
    </button>
  )
}
