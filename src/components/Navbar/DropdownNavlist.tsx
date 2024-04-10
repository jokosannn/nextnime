import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { BsMenuDown } from 'react-icons/bs'
import { usePathname } from 'next/navigation'

type DataList = {
  name: string
  path: string
}

type DataListProps = DataList[]

const dataListNav: DataListProps = [
  { name: 'Anime', path: '/anime' },
  { name: 'Manga', path: '/manga' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const pathname = usePathname()

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
          <BsMenuDown className="text-2xl" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dataListNav.map((item: DataList, i: number) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link
                    href={item.path}
                    className={classNames(
                      active ? 'bg-gray-100' : 'text-black-gray',
                      `block px-4 py-2 text-sm ${
                        pathname.includes(item.path) ? 'text-primary' : 'text-black-gray'
                      }`
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
