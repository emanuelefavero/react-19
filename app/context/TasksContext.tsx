import { createContext, use, useReducer } from 'react'
import { tasks as initialTasks } from '@/data/tasks'
import type { Task, Action } from '@/types/tasks'

const TasksContext = createContext<Task[] | null>(null)
const TasksDispatchContext = createContext<React.Dispatch<Action> | null>(null)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  )
}

export function useTasks() {
  return use(TasksContext)
}

export function useTasksDispatch() {
  return use(TasksDispatchContext)
}

function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'add':
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.text,
          completed: false,
        },
      ]

    case 'delete':
      return tasks.filter((task) => task.id !== action.id)

    default:
      throw Error(`Unknown action: ${(action as Action).type}`)
  }
}
