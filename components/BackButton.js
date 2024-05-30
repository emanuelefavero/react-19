'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function BackButton() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') return null

  return <button onClick={() => router.back()}>Back</button>
}
