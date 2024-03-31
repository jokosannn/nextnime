import Button from '@/components/Atom/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="wrapper min-h-screen flex justify-center flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center px-4 text-black-gray">
        Welcome to your anime and manga haven! Explore endless stories, inspiring characters, and a
        vibrant community.
      </h1>
      <p className="text-sm md:text-base mt-4 w-2/3 text-center font-medium text-gray-500">
        Dive into our extensive collection and embark on unforgettable adventures in the exciting
        world of anime and manga!
      </p>
      <div className="flex gap-2 mt-4 ">
        <Button variant="primary">
          <Link href="/anime" className="w-full h-full flex justify-center items-center">
            anime
          </Link>
        </Button>
        <Button variant="secondary">
          <Link href="/manga" className="w-full h-full flex justify-center items-center">
            manga
          </Link>
        </Button>
      </div>
    </div>
  )
}
