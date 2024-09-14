'use client'

import { use } from 'react'
import ThemeContext, { ThemeProvider } from '@/app/context/ThemeContext'

export default function ContextExample() {
  const theme = use(ThemeContext)

  return (
    <>
      <h2>Reading context with the use hook</h2>

      <p className='mb-2'>
        `use` can be used to read the value of a context instead of using
        `useContext`.
      </p>

      <p className='mb-2'>
        The advantage is that unlike React Hooks, `use` can be called within
        loops and conditional statements like `if`. Like React Hooks, the
        function that calls use must be a Component or Hook.
      </p>

      <ThemeProvider>
        <p>Current theme: {theme}</p>
      </ThemeProvider>
    </>
  )
}
