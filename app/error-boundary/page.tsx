import Link from 'next/link'

// * This page shows how to use the react-error-boundary package to catch errors in the UI

export default function Page() {
  return (
    <>
      <h1>Error Boundary</h1>

      <ul>
        <li>
          <Link href='/error-boundary/with-transition'>
            Error Boundary with Transition
          </Link>
        </li>
      </ul>
    </>
  )
}
