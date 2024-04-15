import Pagination from '@/components/atom/Pagination'
import LoadingCard from '@/components/Loading/LoadingCard'
import { getDataResponse } from '@/utils/api'
import React, { Suspense } from 'react'
const CardAnime = React.lazy(() => import('@/components/CardAnime'))

const PopulerPage = async ({ params }: { params: { page: string } }) => {
  const data = await getDataResponse(`/top/anime?page=${params.page}`)

  return (
    <section className="wrapper">
      <div>
        <h1 className="mb-4 text-xl font-semibold">Populers Anime #{params.page}</h1>
        <div className="grid-card">
          {data?.data?.map((item: any, i: number) => (
            <Suspense key={i} fallback={<LoadingCard />}>
              <CardAnime data={item} />
            </Suspense>
          ))}
        </div>
        <Pagination page={params.page} lastPagination={data?.pagination?.last_visible_page} />
      </div>
    </section>
  )
}

export default PopulerPage
