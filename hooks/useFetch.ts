'use client'

import { useState, useEffect } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      if (!isMounted) return
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url)
        const data = await response.json()

        if (isMounted) {
          setData(data)
          setLoading(false)
        }
      } catch (error) {
        if (isMounted) {
          setError(error as Error)
          setLoading(false)
        }
      }
    }

    fetchData()
    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}
