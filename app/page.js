import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>React 19</h1>

      <nav>
        <ul>
          <li>
            <Link href='/use-action-state'>useActionState</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
