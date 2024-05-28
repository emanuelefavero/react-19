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
  try {
    const result = await submitForm(formData)
    return result
  } catch (error) {
    return { message: 'Failed to complete action' }
  }
}

export default function Component() {
  const [state, dispatch, isPending] = useActionState(action, null)

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
