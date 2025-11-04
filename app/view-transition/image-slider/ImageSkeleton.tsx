'use client'

import { ViewTransition } from 'react'

export default function ImageSkeleton({ imageId }: { imageId: number }) {
  return (
    <div>
      <ViewTransition enter='fade-in' exit='fade-out'>
        <h2 className='text-3xl font-bold text-neutral-500'>Loading...</h2>
      </ViewTransition>
      <ViewTransition key={imageId} enter='slide-up' exit='fade-out'>
        <div className='h-96 w-64 mt-6 bg-neutral-500 animate-pulse rounded-lg'></div>
      </ViewTransition>
    </div>
  )
}
