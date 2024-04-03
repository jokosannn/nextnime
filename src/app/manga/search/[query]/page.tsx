'use client'
import CardManga from '@/components/CardManga'
import LoadingCard from '@/components/Loading/LoadingCard'
import useFetch from '@/hooks/useFetch'
import React from 'react'

const SarchPageManga = ({ params }: { params: { query: string } }) => {
  const decodedQuery = decodeURI(params.query)
  const { data, loading }: { data: any; loading: boolean } = useFetch(`/manga?q=${decodedQuery}`)

  return (
    <section className="wrapper">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg text-black-gray font-semibold">
            {`search manga ${data?.data?.length > 1 ? 'results' : 'result'} of '${decodedQuery}'`}
          </h1>
        </div>
        {loading ? (
          <LoadingCard />
        ) : (
          <>
            {data?.data?.length > 0 ? (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
                {data?.data?.map((item: any, index: number) => (
                  <CardManga key={index} data={item} />
                ))}
              </div>
            ) : (
              <p className="text-red-500">Sorry, Results not found!</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default SarchPageManga
