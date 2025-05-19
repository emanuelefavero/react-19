import { useState } from 'react'
import { useTasksDispatch } from '@/app/context/TasksContext'

export default function Component() {
  const dispatch = useTasksDispatch()
  const [text, setText] = useState('')

  return (
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
  )
}
