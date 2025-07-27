'use client'

import { useLayoutEffect, useRef, useState } from 'react'

// * This component shows how to use `useLayoutEffect` in a React component
export default function Component() {
  const ref = useRef(null)

  const [width, setWidth] = useState(0)

  // Use `useLayoutEffect` instead of `useEffect` when you want to add side effects before rendering
  // NOTE: use it only when necessary, as it can block the browser's painting
  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth)
    }
  }, [ref])

  return (
    <div ref={ref} className={width > 900 ? 'bg-pink-500/30' : 'bg-sky-500/30'}>
      <p>Width: {width}px</p>
    </div>
  )
}
