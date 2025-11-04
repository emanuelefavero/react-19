import { ViewTransition } from 'react'

// TIP: This example shows how to place ViewTransition elements inside other elements

export default function Page() {
  return (
    <ViewTransition>
      <h1>
        View Transition{' '}
        <ViewTransition name='floating-title-2'>
          <span className='inline-block'>Floating Elements</span>
        </ViewTransition>{' '}
        2
      </h1>
    </ViewTransition>
  )
}
