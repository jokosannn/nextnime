'use client'
import CardManga from '@/components/CardManga'
import LoadingCard from '@/components/Loading/LoadingCard'
import { getNestedDataResponse } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const RecomendationsPage = ({ params }: { params: { page: string } }) => {
  const [first, setFirst] = useState(parseInt(params.page) > 1 ? parseInt(params.page) * 25 : 0)
  const [last, setLast] = useState(parseInt(params.page) > 1 ? parseInt(params.page) * 25 + 25 : 25)
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const fetchDataRecomendations = async (first: number, last: number) => {
    try {
      const data: object[] = await getNestedDataResponse('/recommendations/manga', 'entry')
      const results = data.slice(first, last)
      return results
    } catch (error) {
      throw new Error('Failed to fetch recomendations')
    }
  }

  useEffect(() => {
    setData([])
    setLoading(true)
    fetchDataRecomendations(first, last)
      .then((res) => {
        setData(res)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [first, last])

  // console.log({ data })

  return (
    <section className="wrapper">
      <h1 className="mb-4 text-xl font-semibold">Recomendations Manga #{params.page}</h1>
      {loading ? (
        <LoadingCard />
      ) : (
        <>
          <div className="grid-card">
            {data?.map((item: any, i: number) => (
              <CardManga key={i} data={item} />
            ))}
          </div>
          <div className="w-full flex gap-2 justify-center items-center mt-8 mb-6">
            <button
              disabled={params.page === '1' ? true : false}
              className="bg-primary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
              onClick={() => push(`/manga/recomendations/${parseInt(params.page) - 1}`)}
            >
              prev
            </button>
            <p className="text-lg font-medium">{params.page} of 7</p>
            <button
              className="bg-red-secondary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
              disabled={parseInt(params.page) === 7 ? true : false}
              onClick={() => push(`/manga/recomendations/${parseInt(params.page) + 1}`)}
            >
              next
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default RecomendationsPage
