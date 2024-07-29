import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosStarOutline } from "react-icons/io";
import Link from "next/link";

export default function OfficialCard () {
    return (
        <div className="flex flex-row space-x-3 mt-10">
            <Link href="/official">
                <Avatar className="w-14 h-14">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </Link>
            <div>
            <Link href="/official" className="hover:underline underline-offset-4">
                <h2 className="text-md font-bold">John Doe</h2>
            </Link>
                <p className="text-gray-500">Senator. Nairobi, Kenya</p>
                <div className="flex items-center space-x-2">
                    <IoIosStarOutline />
                    <p>4.5</p>
                </div>
            </div>
        </div>
    )
}