'use client'
import React, { useState } from 'react'
import Switch from '../atom/Switch'
import CardAnime from '../CardAnime'
import useFetch from '@/hooks/useFetch'

const Populer = () => {
  const [endPoint, setEndPoint] = useState('movie')
  const data: any = useFetch(`/top/anime?limit=20&type=${endPoint}`)

  const onTabChange = (item: string) => {
    setEndPoint(item === 'Movie' ? 'movie' : 'tv')
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Paling Populer</h1>
        <Switch dataSwitch={['Movie', 'Tv Series']} onTabChange={onTabChange} />
      </div>
      <div className="grid-card">
        {data?.data?.map((item: any, index: number) => (
          <CardAnime key={index} data={item} />
        ))}
      </div>
    </>
  )
}

export default Populer
