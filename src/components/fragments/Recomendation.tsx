import React from 'react'
import CardAnime from '../CardAnime'
import { getNestedAnimeResponse, reproduce } from '@/utils/api'

const Recomendation = async () => {
  const data: any = await getNestedAnimeResponse('/recommendations/anime', 'entry')
  const result = reproduce(data, 7)

  console.log(result)

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl text-black-gray font-bold">Recomendations</h1>
      </div>
      <div className="grid-card">
        {result?.map((item: any, index: number) => (
          <CardAnime key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Recomendation
