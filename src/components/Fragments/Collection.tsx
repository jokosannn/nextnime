import { Suspense } from 'react'
import LoadingCard from '../Loading/LoadingCard'
import { getDataResponse } from '@/utils/api'
import CardAnime from '../CardAnime'

type CollectionProps = {
  title: string
}

const Collection: React.FC<CollectionProps> = async ({ title }) => {
  const data = await getDataResponse(`/anime?q=gate`)
  return (
    <div className="w-full h-fit md:w-3/4">
      <h1>{title} Collections</h1>
      {data?.data?.length > 0 ? (
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {data?.data?.map((item: any, index: number) => (
            <Suspense key={index} fallback={<LoadingCard />}>
              <CardAnime data={item} />
            </Suspense>
          ))}
        </div>
      ) : (
        <p className="text-red-500">Sorry, Results not found!</p>
      )}
    </div>
  )
}

export default Collection
