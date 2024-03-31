'use client'
import React, { useState } from 'react'
import Switch from '../Atom/Switch'
import CardAnime from '../CardAnime'
import useFetch from '@/hooks/useFetch'
import LoadingCard from '../Loading/LoadingCard'

const Populer = () => {
  const [endPoint, setEndPoint] = useState('movie')
  const { data, loading }: { data: any; loading: boolean } = useFetch(
    '/top/anime',
    `?limit=14&type=${endPoint}`
  )

  const onTabChange = (item: string) => {
    setEndPoint(item === 'Movie' ? 'movie' : 'tv')
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl text-black-gray font-bold">Paling Populer</h1>
        <Switch dataSwitch={['Movie', 'Tv Series']} onTabChange={onTabChange} />
      </div>
      {loading ? (
        <LoadingCard />
      ) : (
        <div className="grid-card">
          {data?.data?.map((item: any, index: number) => (
            <CardAnime key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Populer
