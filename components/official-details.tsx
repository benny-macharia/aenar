import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosStarOutline } from "react-icons/io";
export default function OfficialDetails() {
    return (
        <div className="flex flex-col space-y-2 items-center">
            <div className="flex flex-col items-center">
            <Avatar className="w-14 h-14">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-semibold">John Doe</h1>
            <p className="text-gray-500">Senator. Nairobi, Kenya</p>
            <div className="flex items-center space-x-2">
                    <IoIosStarOutline />
                    <p>4.5</p>
                </div>
            </div>

            <div>
                <h2 className="font-semibold">Ratings</h2>
            </div>
        </div>
    )
}