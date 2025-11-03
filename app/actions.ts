'use server'

import { todos } from '@/data/todos'
import { v4 as uuidv4 } from 'uuid'
import type { Todo } from '@/types/todos'

export async function logUser(formData: FormData) {
  await new Promise((res) => setTimeout(res, 1000))
  const name = formData.get('name') as string
  console.log('User:', name) // user will be logged on the server
}

// TIP: You can pass additional arguments to the action by using bind (@see app/server-actions/PassHiddenFormFields.tsx)
export async function logProductId(productId: string) {
  await new Promise((res) => setTimeout(res, 1000))
  console.log('Product ID:', productId)
}

export async function logHiddenFormFieldValue(formData: FormData) {
  const hiddenField = formData.get('hiddenField')
  console.log('Hidden field value:', hiddenField)
}

export async function fakeSlowAction() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('Slow action done')
}

export async function deliverMessage(message: string) {
  await new Promise((res) => setTimeout(res, 1000))
  return message
}

export async function addTodo(newTodo: Todo): Promise<Todo[]> {
  await new Promise((res) => setTimeout(res, 1000))

  todos.push({
    ...newTodo,
    id: uuidv4(), // Replace any optimistic ID with a real UUID
  })
  return todos
}
