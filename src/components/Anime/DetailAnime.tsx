'use client'
import useFetch from '@/hooks/useFetch'
import Image from 'next/image'
import React from 'react'

const DetailAnime = ({ id }: { id: string }) => {
  const { data, loading }: any = useFetch(`/anime/${id}/full`, '')
  const result = data?.data

  return (
    <div>
      {loading ? (
        <p className="text-red-500">Loading...</p>
      ) : (
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/4 aspect-[1/1.5] rounded-sm overflow-hidden">
            {result?.images?.webp.image_url && (
              <Image
                src={result?.images?.webp.image_url}
                width={100}
                height={100}
                alt={result?.title}
                priority
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="w-full sm:w-3/4">
            <h1>title : {result?.title}</h1>
            <p>original title : {result?.title_japanese}</p>
            <p>total episode : {result?.episodes}</p>
            <p>status : {result?.status}</p>
            <p>aired : {result?.aired.string}</p>
            <p>duration : {result?.duration}</p>
            {result?.studios?.map((item: any) => (
              <p key={item.mal_id}>studio : {item.name}</p>
            ))}
            <p className="w-auto">sinopsis : {result?.synopsis}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailAnime
