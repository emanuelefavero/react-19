import Link from 'next/link'
import { ViewTransition } from 'react'

export default function Page() {
  return (
    <>
      <h1 className='mt-4'>View Transition</h1>

      <ul className='mt-2'>
        <li>
          <Link href='/view-transition/image-slider'>Image Slider</Link>
        </li>

        {/* Fake link for styling purposes */}
        <li>Fake link to better see floating transition</li>
        <li>Fake link to better see floating transition</li>
        <li>Fake link to better see floating transition</li>
        <li>Fake link to better see floating transition</li>

        <li>
          <ViewTransition name='floating-title'>
            <Link
              href='/view-transition/floating-elements'
              className='inline-block' // make sure it matches the display type of the other element in the other page
            >
              Floating Elements
            </Link>
          </ViewTransition>
        </li>
        <li>
          <ViewTransition name='floating-title-2'>
            <Link
              href='/view-transition/floating-elements-2'
              className='inline-block'
            >
              Floating Elements 2
            </Link>
          </ViewTransition>
        </li>
      </ul>
    </>
  )
}
