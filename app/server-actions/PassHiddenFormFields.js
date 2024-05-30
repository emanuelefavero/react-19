import { logProductId } from '@/app/actions'

export default function PassHiddenFormFields() {
  const productId = '123' // hardcoded for demonstration purposes

  const passProductId = logProductId.bind(null, productId)

  return (
    <>
      <h1>Pass hidden form fields</h1>

      <form action={passProductId}>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
