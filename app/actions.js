'use server'

import { todos } from '@/data/todos.js'
import { v4 as uuidv4 } from 'uuid'

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

export async function logHiddenFormFieldValue(formData) {
  const hiddenField = formData.get('hiddenField')
  console.log('Hidden field value:', hiddenField)
}

export async function fakeSlowAction(formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('Slow action done')
}

export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000))
  return message
}

export async function addTodo(newTodo) {
  await new Promise((res) => setTimeout(res, 1000))

  todos.push({
    ...newTodo,
    id: uuidv4(), // Replace any optimistic ID with a real UUID
  })
  return todos
}
