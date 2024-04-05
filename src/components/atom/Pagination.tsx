'use client'
import { usePathname, useRouter } from 'next/navigation'

const onlyPagination = [
  '/anime/populer',
  '/anime/recomendations',
  '/manga/populer',
  '/manga/recomendations',
]

const Pagination = ({ page, lastPagination }: { page: string; lastPagination: number }) => {
  const pathname = usePathname()
  const regex = new RegExp(`^(${onlyPagination.join('|')})/\\d+$`)
  const pathReplace = pathname.replace(regex, '$1')
  const { push } = useRouter()

  return (
    <div className="w-full flex gap-2 justify-center items-center mt-8 mb-6">
      <button
        disabled={page === '1' ? true : false}
        className="bg-primary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => push(`/anime/populer/${parseInt(page) - 1}`)}
      >
        prev
      </button>
      <p className="text-lg font-medium">
        {page} of {lastPagination}
      </p>
      <button
        disabled={page === `${lastPagination}` ? true : false}
        className="bg-red-secondary px-4 py-2 rounded-md text-white disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => push(`${pathReplace}/${parseInt(page) + 1}`)}
      >
        next
      </button>
    </div>
  )
}

export default Pagination
