'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false)
  const [isNavScrool, setIsNavScrool] = useState(false)
  const [query, setQuery] = useState('')
  const { push } = useRouter()
  const inputRef: any = useRef(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!query || query.trim() === '') {
      return
    } else {
      push(`/anime/search/${query}`)
    }
    setQuery('')
    setIsNavActive(false)
    inputRef.current.blur()
  }

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      if (scrollY > 0) {
        setIsNavScrool(true)
        setIsNavActive(false)
        inputRef.current.blur()
      } else {
        setIsNavScrool(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${
        isNavScrool ? 'shadow-sm' : ''
      } w-full fixed top-0 left-0 z-50 bg-white h-16 flex justify-center items-center`}
    >
      <nav className="border-gray-200 w-full">
        <div className="wrapper flex flex-wrap items-center justify-between">
          <Link href="/" className="flex">
            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 ">
              NextNime
            </span>
          </Link>
          <IoSearch
            className="text-2xl cursor-pointer block sm:hidden"
            onClick={() => {
              setIsNavActive(!isNavActive)
              inputRef.current.focus()
            }}
          />
          <div
            className={`absolute left-0 bg-indigo-500 p-4 sm:p-0 w-full sm:w-auto sm:bg-transparent sm:static flex ${
              isNavActive ? 'top-16' : '-top-20'
            } gap-2 items-center justify-center md:order-2 transition-all`}
          >
            <select className="sm:block bg-gray-50 border border-gray-300 text-black-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-24 p-2.5">
              <option value="anime">anime</option>
              <option value="manga">manga</option>
            </select>
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
                type="text"
                id="email-adress-icon"
                value={query}
                ref={inputRef}
                className="bg-gray-50 border border-gray-300 text-black-gray sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-light block w-full pl-10 p-2"
                placeholder="Search..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              />
            </form>
            <RxCross2
              className="text-3xl text-white cursor-pointer sm:hidden"
              onClick={() => setIsNavActive(!isNavActive)}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
