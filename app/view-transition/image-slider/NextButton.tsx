'use client'

import { ViewTransition } from 'react'

type Props = {
  onClick: () => void
  isPending: boolean
}

export default function NextButton({ onClick, isPending }: Props) {
  return (
    <ViewTransition enter='fade-in' exit='fade-out'>
      <button
        disabled={isPending}
        onClick={onClick}
        type='button'
        className='w-fit min-w-[120px]'
      >
        {isPending ? 'Loading...' : 'Next Image'}
      </button>
    </ViewTransition>
  )
}
