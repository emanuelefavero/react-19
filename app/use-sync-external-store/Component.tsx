'use client'

import { useSyncExternalStore } from 'react'

// `subscribe` is a function that will be called to subscribe to the external store (like window resize events)
function subscribe(callback: () => void) {
  window.addEventListener('resize', callback)
  return () => window.removeEventListener('resize', callback)
}

// `getSnapshot` is a function that returns the current state of the external store
function getSnapshot() {
  return window.innerWidth
}

// `getServerSnapshot` is a function that returns the initial state of the external store during server-side rendering (in this case we return a fallback value because we don't have access to the window object during SSR)
function getServerSnapshot() {
  return 0 // fallback width during SSR
}

// * `useSyncExternalStore` is used to subscribe to an external store and get the latest state. It can also be used in place of `useEffect` for subscribing to events like window resize.
// TIP: `useSyncExternalStore` is used by external libraries like Redux to manage state updates in a way that is compatible with React's concurrent rendering features
export default function Component() {
  // `useSyncExternalStore` takes three arguments: `subscribe`, `getSnapshot`, and `getServerSnapshot`
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (
    <div className={width > 900 ? 'bg-pink-500/30' : 'bg-sky-500/30'}>
      Component: {width}px
    </div>
  )
}
