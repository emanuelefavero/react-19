import { use } from 'react'
import { ThemeContext } from './context/ThemeContext'

export default function ContextExampleChildren() {
  const { theme, toggleTheme } = use(ThemeContext) // use instead of useContext

  return (
    <>
      <p className='text-emerald-500'>Current theme: {theme}</p>
      <button className='btn btn-primary' onClick={toggleTheme}>
        Toggle theme
      </button>
    </>
  )
}
