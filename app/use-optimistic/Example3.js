import { useOptimistic, useState } from 'react'
import { addTodo } from '@/app/actions.js'
import { todos as initialTodos } from '@/data/todos.js'
import { v4 as uuidv4 } from 'uuid'

export default function Component() {
  const [todos, setTodos] = useState(initialTodos)
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos)

  const action = async (formData) => {
    // Optimistically add the todo to the UI
    const newTodo = {
      id: uuidv4(),
      text: formData.get('todo'),
      completed: false,
    }
    setOptimisticTodos((prevState) => [...prevState, newTodo])

    // Send the todo to the server
    const updatedTodos = await addTodo(formData)
    setTodos(updatedTodos) // update the state with the server response
  }

  return (
    <>
      <h2>Example 3</h2>

      <ul className='mb-2'>
        {optimisticTodos.map((todo) => (
          <li key={`todo-${todo.id}`}>{todo.text}</li>
        ))}
      </ul>

      <form action={action}>
        <input
          type='text'
          name='todo'
          placeholder='Todo...'
          className='mr-2'
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
    </>
  )
}
