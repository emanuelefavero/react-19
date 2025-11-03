import PromiseExample from './PromiseExample'
import ContextExample from './ContextExample'

export default function Page() {
  return (
    <>
      <h1>use</h1>

      <p>
        use is a React API that lets you read the value of a resource like a
        Promise or context.
      </p>

      <PromiseExample />
      <ContextExample />
    </>
  )
}
