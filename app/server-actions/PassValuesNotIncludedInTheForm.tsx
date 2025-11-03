import { logProductId } from '@/app/actions'

export default function PassValuesNotIncludedInTheForm() {
  const productId = '123' // hardcoded for demonstration purposes

  const passProductIdAndLog = logProductId.bind(null, productId)
  // TIP: .bind() is used to pass the productId (which is not included in the form) to the logProductId action

  return (
    <>
      <h2>Pass values not included in the form</h2>

      <p>Useful for passing data to the server that is not part of the form</p>

      <form action={passProductIdAndLog}>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
