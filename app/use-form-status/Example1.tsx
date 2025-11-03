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

export default function Component() {
  return (
    <form action={fakeSlowAction}>
      <Submit />
    </form>
  )
}
