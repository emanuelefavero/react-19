'use client'

import { useReducer, useState } from 'react'
import tasksReducer from './tasksReducer'

export default function Page() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  const [text, setText] = useState('')

  return (
    <>
      <h1>useReducer</h1>

      <p className='mb-4'>
        The <code>useReducer</code> hook is used to manage state that is more
        complex than a simple value or an array. It is similar to{' '}
        <code>useState</code>, but it uses a reducer function to update the
        state.
      </p>

      {/* Add Task */}
      <form
        className='mb-4'
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: 'add', text }) // * Dispatch action
          setText('')
        }}
      >
        <input
          type='text'
          placeholder='New task'
          className='mr-2'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add Task</button>
      </form>

      {/* Tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className='mb-1'>
            <span className='mr-4'>{task.text}</span>
            <button
              aria-label='Delete'
              // * Dispatch action
              onClick={() => dispatch({ type: 'delete', id: task.id })}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

const initialTasks = [
  { id: 0, text: 'Sleep', completed: true },
  { id: 1, text: 'Work', completed: false },
  { id: 2, text: 'Eat', completed: false },
]
