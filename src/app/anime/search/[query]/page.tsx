import LoadingCard from '@/components/Loading/LoadingCard'
import { getDataResponse } from '@/utils/api'
import React, { Suspense } from 'react'
const CardAnime = React.lazy(() => import('@/components/CardAnime'))

const SearchPageAnime = async ({ params }: { params: { query: string } }) => {
  const { query } = params
  const decodedQuery = decodeURI(query)
  const data = await getDataResponse(`/anime?q=${decodedQuery}`)

  return (
    <section className="wrapper">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg text-black-gray font-semibold">
            {`search anime ${data?.data?.length > 1 ? 'results' : 'result'} of '${decodedQuery}'`}
          </h1>
        </div>
        {data?.data?.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
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
    </section>
  )
}

export default SearchPageAnime
