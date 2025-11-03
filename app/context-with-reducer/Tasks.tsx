import { useTasks, useTasksDispatch } from '@/app/context/TasksContext'
import type { Task, Action } from '@/types/tasks'

export default function Component() {
  const tasks = useTasks() as Task[]
  const dispatch = useTasksDispatch() as React.Dispatch<Action>

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
