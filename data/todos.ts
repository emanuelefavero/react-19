import { v4 as uuidv4 } from 'uuid'
import type { Todo } from '@/types/todos'

export const todos: Todo[] = [
  {
    id: uuidv4(),
    text: 'Todo 1',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'Todo 2',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'Todo 3',
    completed: false,
  },
]
