'use client'

import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
