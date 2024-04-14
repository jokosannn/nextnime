import { prisma } from '@/libs/prisma/prisma'
import Session from '@/utils/session'
import Link from 'next/link'

const CommentPage = async () => {
  const user: any = await Session()
  const animeComments = await prisma.animeComment.findMany({
    where: {
      user_email: user?.email,
    },
  })
  const mangaComments = await prisma.mangaComment.findMany({
    where: {
      user_email: user?.email,
    },
  })

  return (
    <section className="wrapper">
      <div>
        <h1 className="text-lg font-semibold mb-4">My Anime Comments</h1>
        {animeComments.length > 0 ? (
          <div className="flex gap-2 flex-wrap w-full">
            {animeComments.map((comment) => (
              <Link
                href={`/anime/detail/${comment.anime_mal_id}`}
                key={comment.id}
                className="w-fit p-4 bg-[#f4f4f4] roundedd-sm"
              >
                <h1 className="italic text-slate-500 text-sm">{comment.anime_title}</h1>
                <p className="text-base mt-1">{comment.comment}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm font-medium text-slate-600">You don&apos;t have a comment yet</p>
        )}
      </div>
      <div className="mt-6">
        <h1 className="text-lg font-semibold mb-4">My Manga Comments</h1>
        {mangaComments.length > 0 ? (
          <div className="flex gap-2 flex-wrap w-full">
            {mangaComments.map((comment) => (
              <Link
                href={`/anime/detail/${comment.manga_mal_id}`}
                key={comment.id}
                className="w-fit p-4 bg-[#f4f4f4] roundedd-sm"
              >
                <h1 className="italic text-slate-500 text-sm">{comment.manga_title}</h1>
                <p className="text-base mt-1">{comment.comment}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm font-medium text-slate-600">You don&apos;t have a comment yet</p>
        )}
      </div>
    </section>
  )
}

export default CommentPage
