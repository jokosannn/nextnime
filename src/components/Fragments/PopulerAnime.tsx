'use client'
import { useState } from 'react'
import Switch from '../Atom/Switch'
import CardAnime from '../CardAnime'
import useFetch from '@/hooks/useFetch'
import LoadingCard from '../Loading/LoadingCard'
import Link from 'next/link'

const PopulerAnime = () => {
  const [endPoint, setEndPoint] = useState('movie')
  const { data, loading }: { data: any; loading: boolean } = useFetch(
    `/top/anime?limit=14&type=${endPoint}`
  )

  const onTabChange = (item: string) => {
    setEndPoint(item === 'Movie' ? 'movie' : 'tv')
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <Link
          href="/anime/populer/1"
          className="text-2xl text-black-gray font-bold hover:text-primary hover:underline"
        >
          Paling Populer
        </Link>
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

export default PopulerAnime
