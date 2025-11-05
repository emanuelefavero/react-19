import Component from './Component'

// * This page shows how to use an error boundary with a transition to show errors in the UI if a transition function throws an error.

export default function Page() {
  return (
    <>
      <h1>Error Boundary with Transition</h1>

      <Component />
    </>
  )
}
