import React from 'react'
import CardAnime from '../CardAnime'
import { getNestedAnimeResponse, reproduce } from '@/utils/api'

const Recomendation = async () => {
  let data: any = await getNestedAnimeResponse('/recommendations/anime', 'entry')
  data = reproduce(data, 7)

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Recomendations</h1>
      </div>
      <div className="grid-card">
        {data?.map((item: any, index: number) => (
          <CardAnime key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Recomendation
