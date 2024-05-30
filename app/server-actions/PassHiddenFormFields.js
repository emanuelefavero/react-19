import { logProductId } from '@/app/actions'

export default function PassHiddenFormFields() {
  const productId = '123' // hardcoded for demonstration purposes

  const passProductId = logProductId.bind(null, productId)

  return (
    <>
      <h2>Pass hidden form fields</h2>

      <form action={passProductId}>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
