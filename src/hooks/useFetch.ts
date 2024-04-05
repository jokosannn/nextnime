'use client'
import { getDataResponse } from '@/utils/api'
import { useEffect, useState } from 'react'

export default function useFetch(url: string) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setData(null)
    setLoading(true)
    getDataResponse(url)
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
