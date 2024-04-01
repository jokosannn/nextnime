'use client'
import useFetch from '@/hooks/useFetch'
import Image from 'next/image'
import Rating from '../Atom/Rating'
import VidioPlayer from './VidioPlayer'
import Button from '../Atom/Button'
import Link from 'next/link'

const DetailAnime = ({ id }: { id: string }) => {
  const { data, loading }: any = useFetch(`/anime/${id}/full`)
  const result = data?.data

  return (
    <div className="mb-20">
      {loading ? (
        <p className="text-red-500">Loading...</p>
      ) : (
        <>
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <div className="w-full h-auto sm:w-[300px] rounded-md overflow-hidden">
              {result?.images?.webp.image_url && (
                <Image
                  src={result?.images?.webp.image_url}
                  width={100}
                  height={100}
                  alt={result?.title}
                  priority
                  className="w-full h-full object-cover bg-center"
                />
              )}
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-2xl font-bold">{result?.title}</h1>
              <p className="text-base text-gray-light mb-2">{result?.title_japanese}</p>
              {result?.score ? (
                <div className="w-14 h-14 my-3 rounded-full overflow-hidden bg-white">
                  <Rating rating={result?.score} />
                </div>
              ) : (
                ''
              )}
              {result?.genres && (
                <div className="flex flex-wrap gap-x-2 gap-y-0">
                  {result?.genres.map((item: any) => (
                    <p
                      key={item.mal_id}
                      className="bg-primary px-3 py-1 rounded-md text-white mb-2 text-sm"
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs bg-red-secondary px-2 py-1 rounded-md text-white w-fit h-fit">
                  Rank #{result?.rank}
                </p>
                <p className="text-xs bg-red-secondary px-2 py-1 rounded-md text-white w-fit h-fit">
                  Popularity #{result?.popularity}
                </p>
              </div>
              <p className="list-detail">
                <span className="font-bold">Total Episode :</span> {result?.episodes} episodes
              </p>
              <p className="list-detail">
                <span className="font-bold">Type :</span> {result?.type} episodes
              </p>
              <p className="list-detail">
                <span className="font-bold">Status :</span> {result?.status}
              </p>
              <p className="list-detail">
                <span className="font-bold">Aired :</span> {result?.aired.string}
              </p>
              <p className="list-detail">
                <span className="font-bold">Duration :</span> {result?.duration}
              </p>
              {result?.studios?.map((item: any) => (
                <p className="list-detail" key={item.mal_id}>
                  <span className="font-bold">Studio :</span> {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full mt-4">
            <p className="font-semibold mb-1">Overview :</p>
            <p className="">{result?.synopsis ? result.synopsis : '-'}</p>
          </div>
          <p className="font-semibold mb-2 mt-1">Streaming :</p>
          <div className="text-sm flex flex-wrap gap-1">
            {result?.streaming.map((item: any, index: number) => (
              <Button variant={`${index % 2 === 0 ? 'primary' : 'third'}`} key={index}>
                <Link
                  target="_blank"
                  href={item.url}
                  className="w-full h-full flex justify-center items-center"
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </>
      )}
      <VidioPlayer YoutubeId={result?.trailer?.youtube_id} />
    </div>
  )
}

export default DetailAnime
