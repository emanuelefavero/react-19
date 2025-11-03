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
        className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
      >
        {isPending ? 'Loading...' : 'Next Image'}
      </button>
    </ViewTransition>
  )
}
