'use client'
import CardManga from '@/components/CardManga'
import LoadingCard from '@/components/Loading/LoadingCard'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/navigation'

const PopulerPage = ({ params }: { params: { page: string } }) => {
  const { data, loading }: { data: any; loading: boolean } = useFetch(
    `/top/manga?page=${params.page}`
  )
  const { push } = useRouter()

  return (
    <section className="wrapper">
      <div>
        <h1 className="mb-4 text-xl font-semibold">Populers Manga #{params.page}</h1>
        {loading ? (
          <LoadingCard />
        ) : (
          <>
            <div className="grid-card">
              {data?.data?.map((item: any, i: number) => (
                <CardManga key={i} data={item} />
              ))}
            </div>
            <div className="w-full flex gap-2 justify-center items-center mt-8 mb-6">
              <button
                disabled={params.page === '1' ? true : false}
                className="bg-primary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => push(`/manga/populer/${parseInt(params.page) - 1}`)}
              >
                prev
              </button>
              <p className="text-lg font-medium">
                {params.page} of {data?.pagination?.last_visible_page}
              </p>
              <button
                disabled={params.page === `${data?.pagination?.last_visible_page}` ? true : false}
                className="bg-red-secondary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => push(`/manga/populer/${parseInt(params.page) + 1}`)}
              >
                next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default PopulerPage
