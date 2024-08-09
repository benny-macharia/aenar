import { IoShieldOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { FaRoad } from "react-icons/fa6";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"



const links = [
    {
        name: 'Security',
        href: '/official/security',
        icon: IoShieldOutline,
    },
    {
        name: 'Transport',
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
        <div className="grid grid-cols-4 gap-4">
            <>
            {links.map((link) => {
        return (
          <Dialog key={link.name} >
            <DialogTrigger asChild>
              <div
                className="flex flex-row space-x-3 hover:cursor-pointer hover:text-lg">
                  <p className="hidden md:block">
                    <link.icon className="w-7 h-7"/>
                    </p>
                  <div className="flex flex-col space-x-2">
                    <p className="font-semibold text-md">{link.name}</p>
                    <div className="flex flex-row ml-10 space-x-2">
                  <IoIosStarOutline size={20}/>
                  <p>9.0</p>
                </div>
                  </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <h1>{link.name}</h1>
            </DialogContent>
          </Dialog>
        );
      })}
        </>
        </div>
    )
}