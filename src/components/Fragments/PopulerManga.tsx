'use client'
import useFetch from '@/hooks/useFetch'
import React, { Suspense, useState } from 'react'
import LoadingCard from '../Loading/LoadingCard'
import Link from 'next/link'
import Switch from '../atom/Switch'
import LoadingSpinner from '../Loading/LoadingSpinner'
const CardManga = React.lazy(() => import('../CardManga'))

const PopulerManga = () => {
  const [endPoint, setEndPoint] = useState('manga')
  const { data, loading }: { data: any; loading: boolean } = useFetch(
    `/top/manga?limit=14&type=${endPoint}`
  )

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
        <LoadingSpinner />
      ) : (
        <div className="grid-card">
          {data?.data?.map((item: any, index: number) => (
            <Suspense key={index} fallback={<LoadingCard />}>
              <CardManga data={item} />
            </Suspense>
          ))}
        </div>
      )}
    </div>
  )
}

export default PopulerManga
