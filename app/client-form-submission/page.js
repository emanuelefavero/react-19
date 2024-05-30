'use client'

export default function Page() {
  // TIP: greet() is a client side "action"
  function greet(formData) {
    let name = formData.get('name')
    alert('Hello ' + name)
  }

  return (
    <>
      <h1>Client Form Submission</h1>

      <form action={greet}>
        <input type='text' name='name' />
        <button type='submit'>Search</button>
      </form>
    </>
  )
}
