'use client'

import { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import ContextExampleChildren from './ContextExampleChildren'

export default function ContextExample() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

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

      {/* TIP: In React 19, we don't need ThemeContext.Provider, we can use ThemeContext directly */}
      <ThemeContext value={{ theme, toggleTheme }}>
        <ContextExampleChildren />
      </ThemeContext>
    </>
  )
}
