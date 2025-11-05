'use client'

// TIP: The button here is just to demonstrate state preservation in the Sidebar
// TIP: The button will maintain its state (active/inactive) even when the Sidebar is hidden/shown if using Activity in the parent component instead of conditional rendering

import { useState } from 'react'
import { cx } from '@/lib/utils'

function Button() {
  const [active, setActive] = useState(false)

  return (
    <button
      onClick={() => setActive(!active)}
      className={cx(
        'min-w-[10ch]',
        active && 'bg-green-500 hover:bg-green-600',
        !active && 'bg-neutral-500 hover:bg-neutral-600'
      )}
    >
      {active ? 'Active' : 'Inactive'}
    </button>
  )
}

export default function Sidebar() {
  return (
    <aside className='h-full sticky top-0 w-fit min-w-[150px] p-4 bg-neutral-500/30'>
      <Button />
    </aside>
  )
}
