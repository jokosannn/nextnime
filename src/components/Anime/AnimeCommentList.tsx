import { prisma } from '@/libs/prisma/prisma'
import { img } from '@/utils/img'
import Image from 'next/image'

interface AnimeCommentListProps {
  id: string
}

const AnimeCommentList: React.FC<AnimeCommentListProps> = async ({ id }) => {
  const comments = await prisma.animeComment.findMany({ where: { anime_mal_id: id } })

  return (
    <div className="py-2 flex flex-col gap-3">
      {comments?.length > 0 ? (
        <>
          {comments?.map((comment) => (
            <div key={comment.id} className="w-full flex gap-2">
              <div>
                <Image
                  src={comment.user_image ? comment.user_image : img.Profile}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-bold">{comment.username}</h1>
                  <p className="text-sm">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Blom ada comment</p>
      )}
    </div>
  )
}

export default AnimeCommentList
