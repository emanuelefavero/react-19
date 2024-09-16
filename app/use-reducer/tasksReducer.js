export default function tasksReducer(tasks, action) {
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
