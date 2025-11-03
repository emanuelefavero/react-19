'use client'

import { use } from 'react'
import type { Message as MessageType } from '@/types/message'

type Props = {
  messagePromise: Promise<MessageType>
}

export default function Message({ messagePromise }: Props) {
  const messageContent = use(messagePromise)

  return <p className='text-emerald-500'>{messageContent.message}</p>
}
