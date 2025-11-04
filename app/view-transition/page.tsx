import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1 className='mt-4'>View Transition</h1>

      <ul className='mt-2'>
        <li>
          <Link href='/view-transition/image-slider'>Image Slider</Link>
        </li>
      </ul>
    </>
  )
}
