import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>React 19</h1>

      <nav>
        <ul>
          <li>
            <Link href='/test'>Test features here</Link>
          </li>
          <li>
            <Link href='/use-action-state'>useActionState</Link>
          </li>
          <li>
            <Link href='/client-actions'>Client Actions</Link>
          </li>
          <li>
            <Link href='/server-actions'>Server Actions</Link>
          </li>
          <li>
            <Link href='/use-form-status'>useFormStatus</Link>
          </li>
          <li>
            <Link href='/use-optimistic'>useOptimistic</Link>
          </li>
          <li>
            <Link href='/use'>use</Link>
          </li>
          <li>
            <Link href='/custom-hooks'>Custom Hooks</Link>
          </li>
          <li>
            <Link href='/preloading-resources'>Preloading Resources</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
