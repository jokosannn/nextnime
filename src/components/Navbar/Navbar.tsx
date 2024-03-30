import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white h-16 flex justify-center items-center shadow-sm">
      <nav className="border-gray-200 px-6 w-full">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap">NextNime</span>
          </a>
          <div className="flex md:order-2">
            <div className="relative mr-3 md:mr-0 hidden md:block">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
