'use client'
import { useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import YouTube from 'react-youtube'

const VidioPlayer = ({ YoutubeId }: { YoutubeId: string }) => {
  const [isOpen, setIsOpen] = useState(true)

  const opts = {
    width: '300',
    height: '200',
  }

  const Trailer = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-4 bg-black-gray text-white float-right"
        >
          X
        </button>
        <YouTube
          videoId={YoutubeId}
          onReady={(event: any) => event.target.pauseVideo()}
          opts={opts}
          loading="lazy"
          onError={() => alert('Video is broken, please try another.')}
        />
      </div>
    )
  }

  const ButtonOpenTrailer = () => {
    return (
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-8 right-4 bg-red-secondary px-3 py-2 rounded-sm text-white flex items-center"
      >
        Tonton Trailer
        <span>
          <FaYoutube className="text-xl ml-1" />
        </span>
      </button>
    )
  }

  return isOpen ? <Trailer /> : <ButtonOpenTrailer />
}

export default VidioPlayer
