'use client'

import { useRouter } from 'next/navigation'
import { TbBookmarkOff } from 'react-icons/tb'

interface ButtonDeleteCollectionProps {
  manga_id: string
}

const ButtonDeleteMangaCollection: React.FC<ButtonDeleteCollectionProps> = ({ manga_id }) => {
  const router = useRouter()

  const handleDeleteCollection = async () => {
    const dataDelete = await fetch(`/api/manga/collection/${manga_id}`, {
      method: 'DELETE',
    })
    if (dataDelete.status) router.refresh()
  }

  return (
    <button className="flex gap-1 mt-2" onClick={handleDeleteCollection}>
      <TbBookmarkOff /> <span className="text-xs font-medium">Delete Collections</span>
    </button>
  )
}

export default ButtonDeleteMangaCollection
