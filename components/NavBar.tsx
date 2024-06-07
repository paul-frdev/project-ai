import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navList = [
  {
    id: 1,
    title: 'Home',
    href: '/'
  },
  {
    id: 2,
    title: 'Pricing',
    href: '/'
  },
  {
    id: 3,
    title: 'News Room',
    href: '/'
  },
  {
    id: 4,
    title: 'Features',
    href: '/'
  }, {
    id: 5,
    title: 'Contact us',
    href: '/'
  }
]
export const NavBar = () => {
  return (
    <header className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '100px',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
      </div>
      <ul className=" gap-x-7 justify-between self-stretch my-auto text-base leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        {navList.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link
        href="/dashboard"
        className="bg-orange px-4 py-2 rounded-sm text-white"
      >
        Free Trial
      </Link>
    </header>
  )
}
