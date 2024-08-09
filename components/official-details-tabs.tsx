// These are the tabs found in the officials ratings page. 
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function OfficialContentDetailsTabs() {
    return (
        <>
            <OfficialDetailsTabLinks />
        </>
    )
}

const links = [
    {
        name: 'Ratings',
        href: '/official/ratings'
    },
    {
        name: 'About',
        href: '/official/about'
    }
]

function OfficialDetailsTabLinks() {

    const pathname = usePathname();

    return (
        <div className="flex flex-row justify-around space-x-5 mb-5">
           {links.map((link) => {
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 text-sm font-medium hover:underline md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'underline underline-offset-8 font-black': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block font-semibold text-lg">
              {link.name}
            </p>
          </Link>
        );
      })}
        </div>
    )
}

