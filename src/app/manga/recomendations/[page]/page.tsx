import Pagination from '@/components/atom/Pagination'
import CardManga from '@/components/CardManga'
import LoadingCard from '@/components/Loading/LoadingCard'
import { getNestedDataResponse } from '@/utils/api'
import { Suspense } from 'react'

const RecomendationsPage = async ({ params }: { params: { page: string } }) => {
  const results: object[] = await getNestedDataResponse('/recommendations/manga', 'entry')
  const data: any = results.slice(
    parseInt(params.page) > 1 ? parseInt(params.page) * 25 : 0,
    parseInt(params.page) > 1 ? parseInt(params.page) * 25 + 25 : 25
  )

  return (
    <section className="wrapper">
      <h1 className="mb-4 text-xl font-semibold">Recomendations Manga #{params.page}</h1>
      <div className="grid-card">
        {data?.map((item: any, i: number) => (
          <Suspense key={i} fallback={<LoadingCard />}>
            <CardManga data={item} />
          </Suspense>
        ))}
      </div>
      <Pagination page={params.page} lastPagination={7} />
    </section>
  )
}

export default RecomendationsPage
