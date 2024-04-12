import ButtonDeleteAnimeCollection from '@/components/Anime/ButtonDeleteAnimeCollection'
import ButtonDeleteMangaCollection from '@/components/Manga/ButtonDelleteMangaCollection'
import { prisma } from '@/libs/prisma/prisma'
import { img } from '@/utils/img'
import Session from '@/utils/session'
import Image from 'next/image'
import Link from 'next/link'

const CollectionsPage = async () => {
  const user: any = await Session()
  const animeCollections = await prisma.animeCollection.findMany({
    where: {
      user_email: user?.email,
    },
  })

  const mangaCollections = await prisma.mangaCollection.findMany({
    where: {
      user_email: user?.email,
    },
  })
  return (
    <section className="wrapper mb-12">
      <div>
        <h1 className="text-lg font-semibold mb-4">My Anime Collections</h1>
        {animeCollections?.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {animeCollections?.map((collect) => (
              <div key={collect.id} className="w-full h-full">
                <div className="relative w-full aspect-[1/1.5] overflow-hidden rounded-md cursor-pointer">
                  <Link href={`/anime/detail/${collect?.anime_mal_id}`}>
                    <Image
                      src={collect.anime_image ? collect.anime_image : img.Poster}
                      width={500}
                      height={500}
                      alt={collect?.anime_title || ''}
                      className="object-cover w-full h-full hover:scale-105 transition-all duration-400"
                      priority
                    />
                  </Link>
                </div>
                <div>
                  <h1 className="line-clamp-1 text-sm text-black-gray mt-1">
                    {collect?.anime_title}
                  </h1>
                  <ButtonDeleteAnimeCollection anime_id={collect.id} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm font-medium text-slate-600">You don&apos;t have a collection yet</p>
        )}
      </div>
      <div className="mt-8">
        <h1 className="text-lg font-semibold mb-4">My Manga Collections</h1>
        {mangaCollections?.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {mangaCollections?.map((collect) => (
              <div key={collect.id} className="w-full h-full">
                <div className="relative w-full aspect-[1/1.5] overflow-hidden rounded-md cursor-pointer">
                  <Link href={`/anime/detail/${collect?.manga_mal_id}`}>
                    <Image
                      src={collect.manga_image ? collect.manga_image : img.Poster}
                      width={500}
                      height={500}
                      alt={collect?.manga_title || ''}
                      className="object-cover w-full h-full hover:scale-105 transition-all duration-400"
                      priority
                    />
                  </Link>
                </div>
                <div>
                  <h1 className="line-clamp-1 text-sm text-black-gray mt-1">
                    {collect?.manga_title}
                  </h1>
                  <ButtonDeleteMangaCollection manga_id={collect.id} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm font-medium text-slate-600">You don&apos;t have a collection yet</p>
        )}
      </div>
    </section>
  )
}

export default CollectionsPage
