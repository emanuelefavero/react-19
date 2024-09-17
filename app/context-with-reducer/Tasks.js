import { useTasks, useTasksDispatch } from '@/app/context/TasksContext'

export default function Tasks() {
  const tasks = useTasks()
  const dispatch = useTasksDispatch()

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className='mb-1'>
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
  )
}
