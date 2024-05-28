'use client'

import React18 from './React18'
import React19 from './React19'

export default function Page() {
  return (
    <>
      <h1>useActionState</h1>

      <p>
        This example demonstrates how to use the <code>useActionState</code>{' '}
        hook in React 19 to manage the state of a form submission.
      </p>

      <h2>React 18 (old way)</h2>
      <React18 />

      <h2>React 19 (new way)</h2>
      <React19 />
    </>
  )
}
