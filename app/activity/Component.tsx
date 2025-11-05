'use client'

import Sidebar from './Sidebar'
import { useState, Activity } from 'react'

export default function Component() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <div className='flex h-full gap-4'>
        {/* CLASSIC WAY (state is not preserved, uncomment to test) */}
        {/* {showSidebar && <Sidebar />} */}

        {/* ACTIVITY WAY (state is preserved) */}
        <Activity mode={showSidebar ? 'visible' : 'hidden'}>
          <Sidebar />
        </Activity>

        {/* Show/Hide Button */}
        <div className='p-4'>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className='min-w-[18ch]'
          >
            {'← '}
            {showSidebar ? 'Hide' : 'Show'} Sidebar
          </button>
        </div>
      </div>
    </>
  )
}
