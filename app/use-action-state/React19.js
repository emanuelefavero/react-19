import { useActionState } from 'react'

async function submitForm() {
  // Simulate a server action
  // TIP: To use a server action in a client component, you need to put the action in a separate file (e.g. app/actions.js) and add the 'use server' flag at the top of the file
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Action completed' })
    }, 1000)
  })
}

async function action(previousState, formData) {
  // TIP: formData is available when the action is triggered so we can pass data to server actions or other functions
  try {
    const result = await submitForm(formData)
    return result
  } catch (error) {
    return { message: 'Failed to complete action' }
  }
}

export default function Component() {
  const [state, dispatch, isPending] = useActionState(action, null)
  // TIP: null is the initial state of the action

  return (
    <>
      <form action={dispatch}>
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
// - dispatch: a function to trigger the action
// - isPending: a boolean to indicate if the action is pending that can be used to show a loading indicator

// TIP: useActionState takes 2 arguments:
// - action: a function that returns a promise (this can be an async function or a server action)
// - initialState: the initial state of the action (this can be any value)
