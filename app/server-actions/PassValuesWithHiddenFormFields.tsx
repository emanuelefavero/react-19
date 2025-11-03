import { logHiddenFormFieldValue } from '@/app/actions'

export default function PassValuesWithHiddenFormFields() {
  return (
    <>
      <h2>Pass values with hidden form fields</h2>

      <p>
        It is another way of passing data to the server that is not part of the
        form. In this case, the data is passed as a hidden form field.
      </p>

      <form action={logHiddenFormFieldValue}>
        <input type='hidden' name='hiddenField' value='Ciao' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
