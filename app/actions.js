'use server'

export async function logUser(formData) {
  await new Promise((res) => setTimeout(res, 1000))
  let name = formData.get('name')
  console.log('User:', name) // user will be logged on the server
}

// TIP: You can pass additional arguments to the action by using bind (@see app/server-actions/PassHiddenFormFields.js)
export async function logProductId(productId, formData) {
  await new Promise((res) => setTimeout(res, 1000))
  console.log('Product ID:', productId)
}

export async function fakeSlowAction(formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('Slow action done')
}

export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000))
  return message
}
