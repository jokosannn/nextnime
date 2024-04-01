'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import NavList from './NavList'

const Navbar = () => {
  const [isNavInput, setIsNavInput] = useState(false)
  const [isNavScrool, setIsNavScrool] = useState(false)
  const [isNavList, setIsNavList] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef: any = useRef(null)
  const { push } = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!query || query.trim() === '') {
      return
    } else {
      push(`/anime/search/${query}`)
    }
    setQuery('')
    setIsNavInput(false)
    inputRef.current.blur()
  }

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      if (scrollY > 0) {
        setIsNavScrool(true)
        setIsNavInput(false)
        inputRef.current.blur()
      } else {
        setIsNavScrool(false)
      }
      if (scrollY) {
        setIsNavList(false)
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
        isNavScrool ? 'shadow-md' : ''
      } w-full fixed top-0 left-0 z-50 bg-white h-16 flex justify-center items-center`}
    >
      <nav className="border-gray-200 w-full">
        <div className="wrapper flex flex-wrap items-center justify-between">
          <Link href="/" className="flex">
            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 ">
              NextNime
            </span>
          </Link>
          <div
            className={`${
              isNavList ? 'right-0' : '-right-72'
            } fixed w-72 h-screen top-0 z-30 bg-white shadow-lg transition-all  md:static md:w-auto md:h-auto md:bg-transparent md:shadow-none`}
          >
            <RxCross2
              onClick={() => {
                setIsNavList(!isNavList)
              }}
              className="text-3xl absolute top-4 right-8 cursor-pointer md:hidden"
            />
            <NavList setIsNavList={setIsNavList} />
          </div>
          <div className="flex gap-4 items-center">
            <div
              className={`absolute left-0 bg-indigo-500 p-4 sm:p-0 w-full sm:w-auto sm:bg-transparent sm:static flex ${
                isNavInput ? 'top-0' : '-top-20'
              } gap-2 items-center justify-center transition-all`}
            >
              <select className="sm:block bg-gray-50 border border-gray-300 text-black-gray text-sm rounded-lg focus:outline-none  w-24 p-2.5">
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
                  type="search"
                  id="email-adress-icon"
                  value={query}
                  ref={inputRef}
                  className="bg-gray-50 border border-gray-300 text-black-gray sm:text-sm rounded-lg  focus:outline-none outline-none placeholder:text-gray-light block w-full pl-10 p-2"
                  placeholder="Search..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                />
              </form>
              <RxCross2
                className="text-3xl text-white cursor-pointer sm:hidden"
                onClick={() => setIsNavInput(!isNavInput)}
              />
            </div>
            <IoSearch
              className="text-2xl cursor-pointer block sm:hidden"
              onClick={() => {
                setIsNavInput(!isNavInput)
                inputRef.current.focus()
              }}
            />
            <IoMenu
              onClick={() => {
                setIsNavList(!isNavList)
              }}
              className="text-3xl cursor-pointer block md:hidden"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
