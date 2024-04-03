'use client'
import CardAnime from '@/components/CardAnime'
import LoadingCard from '@/components/Loading/LoadingCard'
import { getNestedDataResponse } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const RecomendationsPage = ({ params }: { params: { page: string } }) => {
  const [first, setFirst] = useState(parseInt(params.page) > 1 ? parseInt(params.page) * 25 : 0)
  const [last, setLast] = useState(parseInt(params.page) > 1 ? parseInt(params.page) * 25 + 25 : 25)
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // jika ingin mangganti url pakai replace namun jika ingin menimpanya agar user dapat kembali kehalaman sebelunya pakai push
  const { push } = useRouter()

  const fetchDataRecomemdations = async (first: number, last: number) => {
    try {
      const data: object[] = await getNestedDataResponse('/recommendations/anime', 'entry')
      const results: any = data.slice(first, last)
      return results
    } catch (error) {
      throw new Error('Failed to fetch recommendations')
    }
  }

  useEffect(() => {
    setData([])
    setLoading(true)
    fetchDataRecomemdations(first, last)
      .then((res: any) => {
        setData(res)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [first, last])

  // console.log({ data, first, last })

  return (
    <section className="wrapper">
      <h1 className="mb-4 text-xl font-semibold">Recomendations Anime #{params.page}</h1>
      {loading ? (
        <LoadingCard />
      ) : (
        <>
          <div className="grid-card">
            {data?.map((item: any, i: number) => (
              <CardAnime key={i} data={item} />
            ))}
          </div>
          <div className="w-full flex gap-2 justify-center items-center mt-8 mb-6">
            <button
              disabled={params.page === '1' ? true : false}
              className="bg-primary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
              onClick={() => push(`/anime/recomendations/${parseInt(params.page) - 1}`)}
            >
              prev
            </button>
            <p className="text-lg font-medium">{params.page} of 7</p>
            <button
              className="bg-red-secondary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
              disabled={parseInt(params.page) === 7 ? true : false}
              onClick={() => push(`/anime/recomendations/${parseInt(params.page) + 1}`)}
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
