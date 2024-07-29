'use client'
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from 'next/navigation';
import { FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const links = [
    {
        name: 'Home',
        href: '/',
        icon: FaHouse,
    }, 
    {
        name: 'Search',
        href: '/search',
        icon: FaSearch,
    }, 
    {
        name: 'Notifications',
        href: '/notifications',
        icon: IoMdNotifications,
    },
    {
        name: 'Profile',
        href: '/profile',
        icon: FaRegUser,
    }
]

export default function SideLinks() {

    const pathname = usePathname();

    return(
        <>
            {links.map((link) => {
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 text-sm font-medium hover:underline md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'hover:underline': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">
              <link.icon className="w-7 h-7"/>
            </p>
          </Link>
        );
      })}
        </>
    )
}
