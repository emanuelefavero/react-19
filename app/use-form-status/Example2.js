import { useFormStatus } from 'react-dom'
import { fakeSlowAction } from '@/app/actions'

export default function Component() {
  return (
    <form action={fakeSlowAction}>
      <Form />
    </form>
  )
}

function Form() {
  // TIP: useFormStatus must be used on a component inside a form
  const { pending, data } = useFormStatus()

  return (
    <>
      <input
        type='text'
        name='username'
        disabled={pending}
        placeholder='Username'
      />
      <button type='submit' disabled={pending} className='ml-2'>
        {pending ? 'Loading...' : 'Submit'}
      </button>
      <p className='mt-2'>{data && `Sending: ${data?.get('username')}`}</p>
    </>
  )
}
