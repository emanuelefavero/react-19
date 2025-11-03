'use client'

import { useId } from 'react'

export default function Page() {
  const id = useId()

  return (
    <>
      <h1>useId</h1>

      <p>
        useId is useful when you need to assign an id attribute to a jsx
        element. Since react can often render a component multiple times,
        hardcoding id names is not a good practice (ids should be unique in
        html)
      </p>

      <label htmlFor={id}>Label</label>
      <input type='text' id={id} className='ml-4' placeholder='Input' />
    </>
  )
}
