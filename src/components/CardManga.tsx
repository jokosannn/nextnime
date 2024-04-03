import Image from 'next/image'
import Rating from './Atom/Rating'
import Link from 'next/link'
import { img } from '@/utils/img'

const CardManga = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full aspect-[1/1.5] overflow-hidden rounded-md cursor-pointer">
        <Link href={`/manga/detail/${data?.mal_id}`}>
          <Image
            src={data?.images?.webp?.image_url ? data?.images?.webp?.image_url : img.Poster}
            width={500}
            height={500}
            alt={data?.title}
            className="object-cover w-full h-full hover:scale-105 transition-all duration-400"
            priority
          />
        </Link>
        {data?.score && (
          <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 right-2 bg-white">
            <Rating rating={data?.score.toFixed(1)} />
          </div>
        )}
        {data?.chapters ? (
          <p className="absolute bottom-1 left-2 text-white text-xs bg-primary px-2 py-1 rounded-sm">
            {data?.chapters} Chapters
          </p>
        ) : (
          <>
            {data?.chapters === null ? (
              <p className="absolute bottom-1 left-2 text-white text-xs bg-primary px-2 py-1 rounded-sm">
                Ongoing Chapters
              </p>
            ) : null}
          </>
        )}
      </div>
      <h1 className="line-clamp-2 text-sm text-black-gray mt-1">{data?.title}</h1>
    </div>
  )
}

export default CardManga
