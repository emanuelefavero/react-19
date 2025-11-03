'use client'

import { Suspense, use, ViewTransition } from 'react'
import ImageSkeleton from './ImageSkeleton'
import type { ImageData } from './types'

export default function ImageDisplay({
  imageDataPromise,
  imageId,
}: {
  imageDataPromise: Promise<ImageData>
  imageId: number
}) {
  return (
    <Suspense fallback={<ImageSkeleton imageId={imageId} />}>
      <ImageContent imageDataPromise={imageDataPromise} imageId={imageId} />
    </Suspense>
  )
}

function ImageContent({
  imageDataPromise,
  imageId,
}: {
  imageDataPromise: Promise<ImageData>
  imageId: number
}) {
  const image = use(imageDataPromise)

  return (
    <div className='mt-8 flex flex-col items-center'>
      <ViewTransition enter='fade-in' exit='fade-out'>
        <h2 className='text-3xl font-bold mb-6 text-gray-900'>{image.title}</h2>
      </ViewTransition>
      <ViewTransition key={imageId} enter='slide-up' exit='fade-out'>
        <picture>
          <img
            src={image.url}
            alt={image.title}
            className='h-96 w-64 object-cover rounded-lg shadow-lg border-4 border-blue-500'
            loading='eager'
          />
        </picture>
      </ViewTransition>
      <ViewTransition enter='fade-in' exit='fade-out'>
        <p className='text-gray-600 mt-4 text-lg font-semibold'>
          Image ID: {image.id}
        </p>
      </ViewTransition>
    </div>
  )
}
