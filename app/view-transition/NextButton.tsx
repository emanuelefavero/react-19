'use client'

import { useTransition, ViewTransition } from 'react'

type Props = {
  onClick: () => void
}

export default function NextButton({ onClick }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      onClick()
    })
  }

  return (
    <ViewTransition update='button-pulse'>
      <button
        disabled={isPending}
        onClick={handleClick}
        type='button'
        className='w-fit'
      >
        {isPending ? 'Loading...' : 'Next Image'}
      </button>
    </ViewTransition>
  )
}
