'use client'

import { ViewTransition } from 'react'

export default function ImageSkeleton({ imageId }: { imageId: number }) {
  return (
    <div className='mt-8 flex flex-col items-center'>
      <ViewTransition enter='fade-in' exit='fade-out'>
        <h2 className='text-3xl font-bold mb-6 text-gray-400'>Loading...</h2>
      </ViewTransition>
      <ViewTransition key={imageId} enter='slide-up' exit='fade-out'>
        <div className='h-96 w-64 bg-gradient-to-br from-gray-300 to-gray-200 animate-pulse rounded-lg shadow-lg border-4 border-blue-300'></div>
      </ViewTransition>
      <ViewTransition enter='fade-in' exit='fade-out'>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>Loading...</p>
      </ViewTransition>
    </div>
  )
}
