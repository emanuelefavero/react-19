'use client'

import { useFormStatus } from 'react-dom'
import { fakeSlowAction } from '@/app/actions'

function Submit() {
  // TIP: useFormStatus must be used on a component inside a form
  const { pending } = useFormStatus()

  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Loading...' : 'Submit'}
    </button>
  )
}

export default function Page() {
  return (
    <>
      <h1>useFormStatus</h1>

      <p className='mb-2'>
        useFormStatus can be used to get the pending state of the submitted
        form. This pending state can be used for instance to disable the submit
        button or show a loading spinner.
      </p>

      <form action={fakeSlowAction}>
        <Submit />
      </form>
    </>
  )
}

// TIP: useFormStatus us similar to useActionState, but it's specifically for forms instead of actions
