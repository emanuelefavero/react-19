'use client'

import { use } from 'react'

export default function Message({ messagePromise }) {
  const messageContent = use(messagePromise)

  return <p className='text-emerald-500'>{messageContent.message}</p>
}
