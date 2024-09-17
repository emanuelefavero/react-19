'use client'

import { TasksProvider } from '@/app/context/TasksContext'
import AddTask from './AddTask'
import Tasks from './Tasks'

export default function Page() {
  return (
    <>
      <h1>Context with Reducer</h1>

      <p className='mb-2'>
        This page shows how to implement context with reducer in React 19
      </p>

      <TasksProvider>
        <AddTask />
        <Tasks />
      </TasksProvider>
    </>
  )
}
