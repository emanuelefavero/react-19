'use server'

export async function logUser(formData) {
  let name = formData.get('name')
  console.log('User:', name) // user will be logged on the server
}

// TIP: You can pass additional arguments to the action by using bind (@see app/server-actions/PassHiddenFormFields.js)
export async function logProductId(productId, formData) {
  console.log('Product ID:', productId)
}
