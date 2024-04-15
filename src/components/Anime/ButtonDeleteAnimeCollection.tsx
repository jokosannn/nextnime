'use client'

import { useRouter } from 'next/navigation'
import { TbBookmarkOff } from 'react-icons/tb'

interface ButtonDeleteCollectionProps {
  anime_id: string
}

const ButtonDeleteAnimeCollection: React.FC<ButtonDeleteCollectionProps> = ({ anime_id }) => {
  const router = useRouter()

  const handleDeleteCollection = async () => {
    const dataDelete = await fetch(`/api/anime/collection/${anime_id}`, {
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

export default ButtonDeleteAnimeCollection
