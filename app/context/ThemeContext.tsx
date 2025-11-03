import { createContext, useState, ReactNode } from 'react'
import type { Theme } from '@/types/theme'

type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'dark',
  toggleTheme: () => {},
})

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  // TIP: In React 19, we don't need ThemeContext.Provider, we can use ThemeContext directly
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}
