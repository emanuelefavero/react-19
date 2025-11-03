export type Task = {
  id: number
  text: string
  completed: boolean
}

export type Action =
  | { type: 'add'; text: string }
  | { type: 'delete'; id: number }
