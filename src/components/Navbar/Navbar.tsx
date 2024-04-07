'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import DropdownNavlist from './DropdownNavlist'
import { TbWorldSearch } from 'react-icons/tb'
import { ImCross } from 'react-icons/im'
import SelectBox from './SelectBox'
import { signIn, useSession } from 'next-auth/react'
import ProfileNavbar from './ProfileNavbar'

const navbarIsNotActive = ['/login', '/register']

const Navbar = () => {
  const pathname = usePathname()
  const [isNavInput, setIsNavInput] = useState(false)
  const [isNavScrool, setIsNavScrool] = useState(false)
  const [query, setQuery] = useState('')
  const [endPoint, setEndPoint] = useState('anime')
  const inputRef: RefObject<HTMLInputElement> = useRef(null)
  const { push } = useRouter()
  const { status }: any = useSession()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!query || query.trim() === '') {
      return
    } else {
      push(`/${endPoint}/search/${query}`)
    }
    setQuery('')
    setIsNavInput(false)
    if (inputRef.current) inputRef.current.blur()
  }

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      if (scrollY > 0) {
        setIsNavScrool(true)
        setIsNavInput(false)
        if (inputRef.current) inputRef.current.blur()
      } else {
        setIsNavScrool(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const Header = () => {
    return (
      <header
        className={`${
          isNavScrool ? 'shadow-md' : ''
        } w-full fixed top-0 left-0 z-50 bg-white h-16 flex justify-center items-center`}
      >
        <nav className="border-gray-200 w-full">
          <div className="wrapper flex flex-wrap items-center justify-between">
            {/* title */}
            <Link href="/" className="flex">
              <span className="self-center text-2xl pr-10 font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 ">
                NextNime
              </span>
            </Link>

            {/* search */}
            <div className="flex gap-4 items-center">
              <div
                className={`absolute z-50 left-0 bg-indigo-500 p-4 sm:p-0 w-full sm:w-auto sm:bg-transparent sm:static flex ${
                  isNavInput ? 'top-0' : '-top-40'
                } gap-2 items-center justify-center transition-all duration-200`}
              >
                <SelectBox endPoint={endPoint} setEndPoint={setEndPoint} />
                <form onSubmit={handleSubmit} className="relative mr-3 md:mr-0 sm:block">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="email-adress-icon"
                    value={query}
                    ref={inputRef}
                    className="bg-gray-50 border border-gray-300 text-black-gray sm:text-sm rounded-lg  focus:outline-none outline-none placeholder:text-gray-light block w-full pl-10 p-2"
                    placeholder="Search..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                  />
                </form>
                <ImCross
                  className="text-2xl text-white cursor-pointer sm:hidden"
                  onClick={() => setIsNavInput(!isNavInput)}
                />
              </div>
            </div>

            {/* list */}
            <div className="flex gap-2 items-center bg-white">
              <TbWorldSearch
                className="text-[27px] cursor-pointer block sm:hidden"
                onClick={() => {
                  setIsNavInput(!isNavInput)
                  if (inputRef.current) inputRef.current.focus()
                }}
              />
              <div className="mx-auto">
                <DropdownNavlist />
              </div>
              <div className="flex gap-2">
                {status !== 'authenticated' ? (
                  <button
                    onClick={() => signIn()}
                    className="bg-primary px-5 py-2 grid place-content-center rounded-md text-white"
                  >
                    Login
                  </button>
                ) : (
                  <ProfileNavbar />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return !navbarIsNotActive.includes(pathname) && <Header />
}

export default Navbar
