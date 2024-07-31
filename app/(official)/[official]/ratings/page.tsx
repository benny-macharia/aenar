import { IoShieldOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { FaRoad } from "react-icons/fa6";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Link from "next/link";


const links = [
    {
        name: 'Security',
        href: '/official/security',
        icon: IoShieldOutline,
    },
    {
        name: 'Projects',
        href: '/official/transport',
        icon: FaRoad,
    },
    {
        name: 'Environment',
        href: '/official/environment',
        icon: GiPlantsAndAnimals,
    },
    {
        name: 'Health',
        href: '/official/health',
        icon: MdOutlineHealthAndSafety,
    }
]


export default function Ratings(){

    return(
        <div className="space-y-5">
            <>
            {links.map((link) => {
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex flex-row space-x-2">
            <p className="hidden md:block">
              <link.icon className="w-7 h-7"/>
            </p>
            <p>{link.name}</p>
            <div>
            <IoIosStarOutline size={20}/>
            </div>
          </Link>
        );
      })}
        </>
        </div>
    )
}