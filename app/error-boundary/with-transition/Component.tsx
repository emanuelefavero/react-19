'use client'

import { ErrorBoundary } from 'react-error-boundary'
import Button from './Button'

export default function Component() {
  return (
    <>
      <ErrorBoundary
        fallback={
          <>
            <p>⚠️ Something went wrong</p>
            <button onClick={() => window.location.reload()}>Refresh</button>
          </>
        }
      >
        <Button />
      </ErrorBoundary>
    </>
  )
}
