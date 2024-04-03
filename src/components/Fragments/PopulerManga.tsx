'use client'
import useFetch from '@/hooks/useFetch'
import { useState } from 'react'
import LoadingCard from '../Loading/LoadingCard'
import CardManga from '../CardManga'
import Link from 'next/link'
import Switch from '../Atom/Switch'

const PopulerManga = () => {
  const [endPoint, setEndPoint] = useState('manga')
  const { data, loading }: { data: any; loading: boolean } = useFetch(
    `/top/manga?limit=14&type=${endPoint}`
  )

  // console.log(data)

  const onTabChange = (item: string) => {
    setEndPoint(item === 'Manga' ? 'manga' : 'novel')
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <Link
          href="/manga/populer/1"
          className="text-2xl text-black-gray font-bold hover:text-primary hover:underline"
        >
          Paling Populer
        </Link>
        <Switch dataSwitch={['Manga', 'Novel']} onTabChange={onTabChange} />
      </div>
      {loading ? (
        <LoadingCard />
      ) : (
        <div className="grid-card">
          {data?.data?.map((item: any, index: number) => (
            <CardManga key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PopulerManga
