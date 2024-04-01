'use client'
import { getAnimeResponse } from '@/utils/api'
import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setData(null)
    setLoading(true)
    getAnimeResponse(url)
      .then((res: any) => {
        setLoading(false)
        setData(res)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [url])

  return { data, loading }
}

export default useFetch
