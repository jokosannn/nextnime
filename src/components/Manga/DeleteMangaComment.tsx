'use client'

import { useRouter } from 'next/navigation'

interface DeleteMangaCommentProps {
  id: string
}

const DeleteMangaComment: React.FC<DeleteMangaCommentProps> = ({ id }) => {
  const router = useRouter()
  const handleDeleteComment = async (id: string) => {
    const response = await fetch(`/api/manga/comment/${id}`, {
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

export default DeleteMangaComment
