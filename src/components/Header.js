import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to', href: '#', icon: CursorArrowRaysIcon },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-9 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6q6IxEEG40aj8Z7b1OBuJaPb9jzYH9Q8Jw&amp;usqp=CAU"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="font-semibold leading-6 text-indigo-900 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.4 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            <span className="absolute right-0 bottom-0 w-full h-0.5 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-right scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="#" className="font-semibold leading-6 text-indigo-900 relative group">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            <span className="absolute right-0 bottom-0 w-full h-0.5 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-right scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="#" className="font-semibold leading-6 text-indigo-900 relative group">
            Blog
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            <span className="absolute right-0 bottom-0 w-full h-0.5 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-right scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a href="#" className="font-semibold leading-6 text-indigo-900 relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            <span className="absolute right-0 bottom-0 w-full h-0.5 bg-indigo-900 group-hover:bg-indigo-600 transition-all transform origin-right scale-x-0 group-hover:scale-x-100"></span>
          </a>
        </div>


        <div className="hidden lg:flex lg:flex-1 mx-8 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Popover className="relative">
              <Popover.Button className="flex items-left gap-x-1 font-semibold leading-6 text-blue-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-20 top-10 z-10 mt-3 w-96 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <h2 className="text-xl text-center font-semibold text-gray-900 mb-4">Login</h2>
                    <form>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
                        />
                      </div>
                      <div className="text-center p-3">
                        <button
                          type="submit"
                          className="inline-flex justify-center m-2 px-6 py-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Log In
                        </button>

                      </div>
                    </form>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

          </a>
        </div>
        <div className="hidden lg:flex mx-4 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Popover className="relative">
              <Popover.Button className="flex items-left gap-x-1 font-semibold leading-6 text-indigo-900">
                Sign in <span aria-hidden="true">&rarr;</span>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-20 top-10 z-10 mt-3 w-96 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <h2 className="text-xl text-center font-semibold text-gray-900 mb-4">Sign Up</h2>
                    <form>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
                        />
                      </div>
                      <div className="text-center p-3">

                        <button
                          type="submit"
                          className="inline-flex justify-center m-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover-bg-blue-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover-bg-blue-500"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover-bg-blue-500"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover-bg-blue-500"
                >
                  Contact
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Login
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">

                        {products.map((item) => (
                          <Fragment key={item.name}>
                            {item.name === 'Analytics' && (
                              <div className="block">
                                <form className="p-4">
                                  <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      id="email"
                                      className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                      Password
                                    </label>
                                    <input
                                      type="password"
                                      id="password"
                                      className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
                                    />
                                  </div>
                                  <div className="text-center">
                                    <button
                                      type="submit"
                                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                      Log In
                                    </button>
                                  </div>
                                </form>
                              </div>
                            )}
                          </Fragment>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
