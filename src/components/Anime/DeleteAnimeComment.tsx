'use client'

import { useRouter } from 'next/navigation'

interface DeleteAnimeCommentProps {
  id: string
}

const DeleteAnimeComment: React.FC<DeleteAnimeCommentProps> = ({ id }) => {
  const router = useRouter()
  const handleDeleteComment = async (id: string) => {
    const response = await fetch(`/api/anime/comment/${id}`, {
      method: 'DELETE',
    })
    if (response.status) return router.refresh()
  }

  return (
    <p
      onClick={() => handleDeleteComment(id)}
      className="text-sm text-red-secondary cursor-pointer hover:underline"
    >
      Delete
    </p>
  )
}

export default DeleteAnimeComment
