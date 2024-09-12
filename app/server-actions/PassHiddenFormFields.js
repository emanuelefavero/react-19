import { logProductId } from '@/app/actions'

export default function PassHiddenFormFields() {
  const productId = '123' // hardcoded for demonstration purposes

  const passProductIdAndLog = logProductId.bind(null, productId)
  // TIP: .bind() is used to pass the productId (which is not included in the form) to the logProductId action

  return (
    <>
      <h2>Pass hidden form fields</h2>

      <form action={passProductIdAndLog}>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
