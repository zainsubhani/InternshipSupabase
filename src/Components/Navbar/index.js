/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { FiDatabase } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import LOGO from "../../assets/images/Logo.png";
import Products from "../Products";
import Latest from "../SubOption";
import MediaObject from "../MediaObject";
import { AiOutlineStar } from "react-icons/ai";

const solutions = [
  {
    id: 1,
    icon: <FiDatabase size={20} />,
    icondes: "Database",
    des: `Every project is a full Postgres database, the world's most trusted relational database.`,
  },
  {
    id: 2,
    icon: <FiDatabase size={20} />,
    icondes: "Authentication",
    des: `Add user sign ups and logins, securing your data with Row Level Security.`,
  },
  {
    id: 3,
    icon: <FiDatabase size={20} />,
    icondes: "Storage",
    des: `Store, organize, and serve large files. Any media, including videos and images.`,
  },
  {
    id: 4,
    icon: <FiDatabase size={20} />,
    icondes: "Edge Functions",
    des: `Write custom code without deploying or scaling servers.`,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "View All Products", href: "#", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About", href: "#", icon: InformationCircleIcon },
  { name: "Customers", href: "#", icon: OfficeBuildingIcon },
  { name: "Press", href: "#", icon: NewspaperIcon },
  { name: "Careers", href: "#", icon: BriefcaseIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookmarkAltIcon },
  { name: "Webinars", href: "#", icon: DesktopComputerIcon },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];
const data = [
  {
    id: 1,
    icon: <BsBook />,
    heading: "Documentation",
    des: "Everything you need that makes it simple to get started.",
  },
  {
    id: 2,
    icon: <BsBook />,
    heading: "API reference",
    des: "Examples and references for using API libaries ",
  },
  {
    id: 3,
    icon: <BsBook />,
    heading: "Guides",
    des: "Examples and references for using Supabase ",
  },
  {
    id: 4,
    icon: <BsBook />,
    heading: "Careers",
    des: "Join the Supabase team and get involed  ",
  },
];
const productsdata = [
  {
    id: 1,
    icon: <FiDatabase size={20} />,
    icondes: "Database",
    des: `Every project is a full Postgres database, the world's most trusted relational database.`,
  },
  {
    id: 2,
    icon: <FiDatabase size={20} />,
    icondes: "Authentication",
    des: `Add user sign ups and logins, securing your data with Row Level Security.`,
  },
  {
    id: 3,
    icon: <FiDatabase size={20} />,
    icondes: "Storage",
    des: `Store, organize, and serve large files. Any media, including videos and images.`,
  },
  {
    id: 4,
    icon: <FiDatabase size={20} />,
    icondes: "Edge Functions",
    des: `Write custom code without deploying or scaling servers.`,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className=" ">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className=" h-[65px] mx-auto w-full flex  items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div className="-mr-2 -my-2 md:hidden block">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="md:w-auto w-full flex justify-center">
            <a href="#" className="flex ">
              <img className="lg:h-[30px] w-[124px] " src={LOGO} alt="" />
            </a>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group   inline-flex items-center  font-bold "
                      )}
                    >
                      <span className="text-sm font-medium font-customNeue text-[#ffffff]  hover:text-[#3fcf8e] ">
                        Product{" "}
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className=" hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-[#1C1C1C] ">
                        <div className="grid grid-cols-2">
                          <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-2 lg:px-8 lg:py-12 xl:py-16">
                            {solutions.map((v) => (
                              <a
                                key={v.id}
                                className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                              >
                                <Products
                                  key={v.id}
                                  icon={v.icon}
                                  icondes={v.icondes}
                                  des={v.des}
                                  notShow={true}
                                />
                              </a>
                            ))}
                          </div>
                          <div>
                            <Latest />
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span className="text-sm font-medium font-customNeue text-[#ffffff]  hover:text-[#3fcf8e]">
                        Developers
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                        <div className="grid grid-cols-2 bg-[#1C1C1C]">
                          <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-2 lg:px-8 lg:py-12 xl:py-16">
                            {data.map((v, k) => (
                              <MediaObject
                                key={v.id}
                                icon={v.icon}
                                heading={v.heading}
                                des={v.des}
                              />
                            ))}
                          </div>
                          <div>
                            <Latest />
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a
                href="#"
                className="text-sm font-medium font-customNeue text-[#ffffff]  hover:text-[#3fcf8e] hover:border-b-2 hover:border-[#3fcf8e]  "
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-medium font-customNeue text-[#ffffff]  hover:text-[#3fcf8e] hover:border-b-2 hover:border-[#3fcf8e]  "
              >
                Docs
              </a>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <div className="flex items-center pr-2 hover:bg-gray-700 mr-1 hover:rounded-md p-1">
                <div className="text-[white] ">
                  <AiOutlineStar className="hover:text-[yellow]" />
                </div>
                <div className="text-xs text-[white] ml-1">
                  Star us on GitHub
                </div>
              </div>
              <a
                href="#"
                className="text-xs border-2 rounded-md border-[gray] p-1 font-medium text-[white] hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="mr-8 ml-3 inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Start your Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className=" absolute border border-gray-700  z-30 top-0 inset-x-0  transition transform origin-top-right md:hidden "
        >
          <div className=" shadow-xl ring-1 ring-black ring-opacity-5 bg-[#232323]  ">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <Popover.Button className=" inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" px-5 pb-10">
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Sign in
                </a>

                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Developers
                </a>

                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Company
                </a>

                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Blog
                </a>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  mt-10   gap-10">
                {productsdata.map((v, k) => (
                  <Products
                    key={v.id}
                    icon={v.icon}
                    icondes={v.icondes}
                    des={v.des}
                  />
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
