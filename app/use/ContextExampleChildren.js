import { use } from 'react'
import { ThemeContext } from './context/ThemeContext'

export default function ContextExampleChildren() {
  // `use` can be used to read the value of a context instead of using `useContext`
  const { theme, toggleTheme } = use(ThemeContext)

  return (
    <>
      <p className='text-emerald-500'>Current theme: {theme}</p>
      <button className='btn btn-primary' onClick={toggleTheme}>
        Toggle theme
      </button>
    </>
  )
}
