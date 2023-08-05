import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, HomeIcon, UserIcon } from "@heroicons/react/20/solid";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left rounded-md">
      <div>
        <Menu.Button className="inline-flex w-[60px] justify-center gap-x-1.5 rounded-full bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Bars3Icon className="text-2xl text-btgray" aria-hidden="true" />
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
        <Menu.Items className="absolute right-10 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-plomo-600",
                    "px-4 py-2 text-md rounded-md flex items-center"
                  )}
                >
                  <HomeIcon className="mr-3 text-md inline-block h-6" />
                  Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-plomo-600",
                    "px-4 py-2 text-md rounded-md flex items-center"
                  )}
                >
                  <UserIcon className="mr-3 inline-block h-6" /> About
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
