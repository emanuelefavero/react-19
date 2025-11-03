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
    <Suspense key={imageId} fallback={<ImageSkeleton imageId={imageId} />}>
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
    <div>
      <ViewTransition enter='fade-in' exit='fade-out'>
        <h2 className='text-3xl font-bold'>{image.title}</h2>
      </ViewTransition>
      <ViewTransition key={imageId} enter='slide-up' exit='fade-out'>
        <picture>
          <img
            src={image.url}
            alt={image.title}
            className='h-96 w-64 object-cover rounded-lg mt-6'
            loading='eager'
          />
        </picture>
      </ViewTransition>
    </div>
  )
}
