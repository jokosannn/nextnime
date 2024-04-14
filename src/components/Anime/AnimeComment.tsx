'use client'

import { img } from '@/utils/img'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface AnimeCommentProps {
  anime_mal_id: string
  anime_title: string
  username: string
  user_email: string
  user_image: string
}

const AnimeComment: React.FC<AnimeCommentProps> = ({
  anime_mal_id,
  anime_title,
  username,
  user_email,
  user_image,
}) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(user_email || null)
  const router = useRouter()

  useEffect(() => {
    setUser(user_email || null)
  }, [user_email])

  const handleCommentSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      user_email,
      user_image,
      anime_mal_id,
      username,
      anime_title,
      comment: message,
    }
    try {
      const response = await fetch('/api/anime/comment', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      if (response.status) {
        setLoading(false)
        router.refresh()
      }
      setMessage('')
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex gap-2 mb-4">
      <div className="hidden sm:block">
        <Image src={user_image ? user_image : img.Profile} alt="" width={50} height={50} />
      </div>
      <form onSubmit={handleCommentSubmit} className="w-full flex flex-col gap-1 items-end">
        <textarea
          name="comment"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis Komentar..."
          required
          className="w-full px-2 py-2 border border-slate-400 focus:border-slate-600 focus:border text-black-gray"
        />
        {user_email ? (
          <button
            type="submit"
            disabled={loading}
            className="bg-primary disabled:bg-slate-600 w-fit text-base px-3 py-1 rounded-sm text-white"
          >
            {loading ? 'Loading...' : 'Posting'}
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-primary disabled:bg-slate-600 w-fit text-base px-3 py-1 rounded-sm text-white"
          >
            Login terlebih dulu
          </Link>
        )}
      </form>
    </div>
  )
}

export default AnimeComment
