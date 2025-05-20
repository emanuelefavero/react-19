import { useOptimistic, useState, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { addTodo } from '@/app/actions.js'
import { todos as initialTodos } from '@/data/todos.js'
import { v4 as uuidv4 } from 'uuid'

function Button() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending} // Disable the button while the form is submitting
      className='disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {pending ? 'Adding...' : 'Add Todo'}
    </button>
  )
}

export default function Component() {
  const formRef = useRef(null)
  const [todos, setTodos] = useState(initialTodos)
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos)

  const action = async (formData) => {
    const newTodo = {
      id: uuidv4(), // Temporary ID for optimistic UI
      // NOTE: Remember to add a new (different) ID in the server action
      text: formData.get('todo'),
      completed: false,
    }

    // Optimistically add the todo to the UI
    setOptimisticTodos((prevState) => [...prevState, newTodo])

    formRef.current.reset() // clear the form before sending the request

    // Send the same todo object to the server
    const updatedTodos = await addTodo(newTodo)
    setTodos(updatedTodos) // update the state with the server response
  }

  return (
    <>
      <h2>Example 3</h2>

      <form action={action} ref={formRef}>
        <input
          type='text'
          name='todo'
          placeholder='Todo...'
          className='mr-2'
          required
        />
        <Button />
      </form>

      <ul className='mb-2'>
        {optimisticTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}
