import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import UserIcon from "../icons/UserIcon";
import BellRing from "../icons/BellRing";
import ChatIcon from "../icons/ChatIcon";
import HeartIcon from "../icons/HeartIcon";
import BookingIcon from "../icons/BookingIcon";
import LogoutIcon from "../icons/LogoutIcon";

export default function Profile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="w-[86px] h-12 flex justify-between items-center cursor-pointer px-3 rounded-[99px] bg-[#EAF1FF]">
                    <img className="size-4" src="/images/menu.svg" alt="Menu" />
                    <div className="relative">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="size-[17px] -top-1 absolute 
                    -right-2 text-[#F5F5F5] text-[10px] flex items-center 
                    justify-center font-[800] box-content rounded-full bg-[#FF385C] border border-white">1</div>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[256px] rounded-2xl px-4 -right-10 top-3 absolute">
                <DropdownMenuLabel className="text-[18px] flex items-center gap-5 font-[700]">
                    <UserIcon />
                    <span>Account</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <BellRing />
                        <span>уведомление</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <ChatIcon />
                        <span>сообщение</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <HeartIcon />
                        <span>избреные</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <BookingIcon />
                        <span>мои бронирования</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem className="text-[18px] font-[400] cursor-pointer text-[#E32934]  flex gap-5 items-center">
                    <LogoutIcon />
                    <span>выход</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}

