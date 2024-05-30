'use server'

export async function logUser(formData) {
  let name = formData.get('name')
  console.log('User:', name) // user will be logged on the server
}
