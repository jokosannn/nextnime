import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiOutlineChevronUpDown } from 'react-icons/hi2'
import { FaCheck } from 'react-icons/fa6'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface SelectBoxProps {
  endPoint: string
  setEndPoint: React.Dispatch<React.SetStateAction<string>>
}

const people = [
  { name: 'Anime', value: 'anime' },
  { name: 'Manga', value: 'manga' },
]

export default function SelectBox({ endPoint, setEndPoint }: SelectBoxProps) {
  return (
    <div className="sm:block bg-gray-50 border border-gray-300 text-black-gray text-sm rounded-lg focus:outline-none w-24">
      <Listbox value={endPoint} onChange={setEndPoint}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate capitalize">{endPoint}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineChevronUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full shadow-sm overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-7 pr-2 mx-1 rounded-md ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-sm ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <FaCheck className="h-3 w-3" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
