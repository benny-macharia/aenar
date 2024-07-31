// These are the tabs found in the officials ratings page. 

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

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
            <Link href="/official/ratings">
                <h2 className="font-semibold">Ratings</h2>
            </Link>
            <Link href="/official/about">
                <h2 className="font-semibold">About</h2>
            </Link>
        </div>
    )
}

