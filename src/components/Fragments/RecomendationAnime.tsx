import Link from 'next/link'
import CardAnime from '../CardAnime'
import { getNestedDataResponse, reproduce } from '@/utils/api'

const RecomendationAnime = async () => {
  const data: any = await getNestedDataResponse('/recommendations/anime', 'entry')
  const result: object[] = reproduce(data, 7)

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-5">
        <Link
          href="/anime/recomendations/1"
          className="text-2xl text-black-gray font-bold hover:text-primary hover:underline"
        >
          Recomendations
        </Link>
      </div>
      <div className="grid-card">
        {result?.map((item: object, index: number) => (
          <CardAnime key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default RecomendationAnime
