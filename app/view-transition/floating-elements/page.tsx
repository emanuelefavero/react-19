import { ViewTransition } from 'react'

// * Use ViewTransition with the same name in two elements in different pages to create a floating transition between them.
// TIP: The elements should have the same display type (e.g., both inline-block, both block, etc.) for better results

export default function Page() {
  return (
    <ViewTransition name='floating-title'>
      <h1 className='inline-block'>Floating Elements</h1>
    </ViewTransition>
  )
}
