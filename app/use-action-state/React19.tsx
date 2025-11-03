import { useActionState } from 'react'
import type { Message } from '@/types/message'

async function submitForm(formData: FormData): Promise<Message> {
  const name = formData.get('name') as string
  // Simulate a server action
  // TIP: To use a server action in a client component, you need to put the action in a separate file (e.g. app/actions) and add the 'use server' flag at the top of the file
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: `Hello, ${name}` })
    }, 1000)
  })
}

async function action(
  previousState: Message | null,
  formData: FormData
): Promise<Message> {
  // TIP: formData is available when the action is triggered so we can pass data to server actions or other functions
  try {
    const result = await submitForm(formData)
    return result
  } catch (error) {
    console.error(error)
    return { message: 'Failed to complete action' }
  }
}

// TIP: We decide the initial state of the action
const initialState = {
  message: '',
}

export default function Component() {
  const [state, dispatch, isPending] = useActionState(action, initialState)

  return (
    <>
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

// TIP: useActionState returns 3 values:
// - state: the current state of the action
// - dispatch2: a function to trigger the action
// - isPending: a boolean to indicate if the action is pending that can be used to show a loading indicator

// TIP: useActionState takes 2 arguments:
// - action: a function that returns a promise (this can be an async function or a server action)
// - initialState: the initial state of the action (this can be any value)
