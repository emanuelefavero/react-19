'use client'

import { useState } from 'react'
import ImageDisplay from './ImageDisplay'
import NextButton from './NextButton'
import type { ImageData } from './types'

const MIN_ID = 33
const MAX_ID = 43

async function fetchImage(id: number): Promise<ImageData> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate delay
  return {
    id,
    url: `https://picsum.photos/id/${id}/200/300.webp`,
    title: `Image ${id}`,
  }
}

export default function ImageSlider() {
  const [imageId, setImageId] = useState(MIN_ID)
  const [imageDataPromise, setImageDataPromise] = useState<Promise<ImageData>>(
    () => fetchImage(MIN_ID)
  )

  const handleNextImage = () => {
    const nextId = imageId < MAX_ID ? imageId + 1 : MIN_ID // Infinite loop

    setImageId(nextId)
    setImageDataPromise(fetchImage(nextId))
  }

  return (
    <>
      <div className='mt-8'>
        <h1 className='text-4xl font-bold text-center mb-2'>Image Slider</h1>
        <p className='text-center mb-6'>
          Viewing images {MIN_ID} to {MAX_ID}
        </p>

        <ImageDisplay imageDataPromise={imageDataPromise} imageId={imageId} />

        <div className='mt-8 flex justify-center'>
          <NextButton onClick={handleNextImage} />
        </div>
      </div>
    </>
  )
}
