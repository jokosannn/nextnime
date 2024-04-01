'use client'
import CardAnime from '@/components/CardAnime'
import LoadingCard from '@/components/Loading/LoadingCard'
import useFetch from '@/hooks/useFetch'

const SearchPage = ({ params }: { params: { query: string } }) => {
  const { query } = params
  const decodedQuery = decodeURI(query)
  const { data, loading }: { data: any; loading: boolean } = useFetch(`/anime?q=${decodedQuery}`)

  return (
    <section className="wrapper">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg text-black-gray font-semibold">
            {`search ${data?.data?.length > 1 ? 'results' : 'result'} of '${decodedQuery}'`}
          </h1>
        </div>
        {loading ? (
          <LoadingCard />
        ) : (
          <>
            {data?.data?.length > 0 ? (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
                {data?.data?.map((item: any, index: number) => (
                  <CardAnime key={index} data={item} />
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

export default SearchPage
