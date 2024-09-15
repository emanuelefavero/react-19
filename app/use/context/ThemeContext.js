import { createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
})

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  // TIP: In React 19, we don't need ThemeContext.Provider, we can use ThemeContext directly
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
