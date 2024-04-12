'use client'

import { useState } from 'react'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaBookmark } from 'react-icons/fa'

interface ButtonCollectionProps {
  user_email: string
  manga_mal_id: string
  manga_title: string
  manga_image: string
}

const ButtonCollection: React.FC<ButtonCollectionProps> = ({
  user_email,
  manga_mal_id,
  manga_title,
  manga_image,
}) => {
  const [isCreated, setIsCreated] = useState(false)

  const handleCollection = async () => {
    const dataCollection = { user_email, manga_mal_id, manga_title, manga_image }
    console.log(dataCollection)
    const collection = await fetch('/api/manga/collection', {
      method: 'POST',
      body: JSON.stringify(dataCollection),
    })
    if (collection.status) {
      setIsCreated(true)
    }
  }

  return (
    <>
      {isCreated ? (
        <button
          onClick={handleCollection}
          className="w-fit bg-primary px-3 py-1 cursor-not-allowed absolute top-2 right-2 flex items-center gap-1 rounded-md"
        >
          <BsFillBookmarkCheckFill className="text-xs text-white" />{' '}
          <span className="text-xs block text-white capitalize font-medium">collected</span>
        </button>
      ) : (
        <button
          onClick={handleCollection}
          className="w-fit bg-primary cursor-pointer px-3 py-1 absolute top-2 right-2 flex items-center gap-1 rounded-md"
        >
          <FaBookmark className="text-xs text-white" />{' '}
          <span className="text-xs block text-white capitalize font-medium">add to collection</span>
        </button>
      )}
    </>
  )
}

export default ButtonCollection
