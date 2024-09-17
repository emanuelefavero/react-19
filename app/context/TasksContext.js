import { createContext, useContext, useReducer } from 'react'

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

function tasksReducer(tasks, action) {
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
      throw Error(`Unknown action: ${action.type}`)
  }
}

const initialTasks = [
  { id: 0, text: 'Sleep', completed: true },
  { id: 1, text: 'Work', completed: false },
  { id: 2, text: 'Eat', completed: false },
]
