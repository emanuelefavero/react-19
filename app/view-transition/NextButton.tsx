'use client'

import { useTransition, ViewTransition } from 'react'

type Props = {
  action: () => void
}

export default function NextButton({ action }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      await action()
    })
  }

  return (
    <ViewTransition enter='fade-in' exit='fade-out'>
      <button
        disabled={isPending}
        onClick={handleClick}
        type='button'
        className='w-fit min-w-[120px]'
      >
        {isPending ? 'Loading...' : 'Next Image'}
      </button>
    </ViewTransition>
  )
}
