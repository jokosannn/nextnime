import Pagination from '@/components/Atom/Pagination'
import LoadingCard from '@/components/Loading/LoadingCard'
import { getNestedDataResponse } from '@/utils/api'
import React, { Suspense } from 'react'
const CardAnime = React.lazy(() => import('@/components/CardAnime'))

const RecomendationsPage = async ({ params }: { params: { page: string } }) => {
  const results: object[] = await getNestedDataResponse('/recommendations/anime', 'entry')
  const data: any = results.slice(
    parseInt(params.page) > 1 ? parseInt(params.page) * 25 : 0,
    parseInt(params.page) > 1 ? parseInt(params.page) * 25 + 25 : 25
  )

  return (
    <section className="wrapper">
      <h1 className="mb-4 text-xl font-semibold">Recomendations Anime #{params.page}</h1>
      <div className="grid-card">
        {data?.map((item: any, i: number) => (
          <Suspense key={i} fallback={<LoadingCard />}>
            <CardAnime data={item} />
          </Suspense>
        ))}
      </div>
      <Pagination page={params.page} lastPagination={7} />
    </section>
  )
}

export default RecomendationsPage
