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

  return (
    <section className="wrapper">
      <h1 className="text-lg font-semibold mb-4">My Anime Comments</h1>
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
    </section>
  )
}

export default CommentPage
