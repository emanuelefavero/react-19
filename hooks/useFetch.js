'use client'

import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(true)
      })
      .catch((error) => console.error(error))
  }, [])

  return data
}
