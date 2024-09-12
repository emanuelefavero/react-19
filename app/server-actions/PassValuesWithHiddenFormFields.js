import { logHiddenFormFieldValue } from '@/app/actions'

export default function PassValuesWithHiddenFormFields() {
  return (
    <>
      <h2>Pass values with hidden form fields</h2>

      <p>
        This form includes a hidden field with a value. When you submit the
        form, the value of the hidden field will be logged to the server. It is
        useful for passing extra data to the server without showing it to the
        user.
      </p>

      <form action={logHiddenFormFieldValue}>
        <input type='hidden' name='hiddenField' value='Ciao' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
