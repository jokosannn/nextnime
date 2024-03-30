'use client'
import { fetchDataApi } from '@/utils/api'
import React, { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(null)
    fetchDataApi(url)
      .then((res: any) => {
        setData(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [url])

  return data
}

export default useFetch
