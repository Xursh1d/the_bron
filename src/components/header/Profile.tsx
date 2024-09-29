import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { BellRing, Book, HeartIcon, LogOutIcon, MessageCircleMore, UserIcon } from "lucide-react";
import { useAuth } from "@/pages/auth/AuthProvider";

export default function Profile() {
    const navigate = useNavigate()
    const { setShowModal } = useAuth()

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div className="w-[86px] hidden sm:flex h-12 justify-between items-center cursor-pointer px-3 rounded-[99px] bg-[#EAF1FF]">
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
                <DropdownMenuLabel onClick={() => setShowModal("register")} className="text-[18px] flex items-center gap-5 font-[700]">
                    <UserIcon strokeWidth={2} color="#000000" />
                    <span>Account</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => navigate("/notifications")} className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <BellRing strokeWidth={1.5} />
                        <span>уведомление</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <MessageCircleMore strokeWidth={1.5} />
                        <span>сообщение</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/likes")} className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <HeartIcon strokeWidth={1.5} />
                        <span>избреные</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/my-reservation")} className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                        <Book strokeWidth={1.5} />
                        <span>мои бронирования</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem className="text-[18px] px-2.5 font-[400] cursor-pointer text-[#E32934]  flex gap-5 items-center">
                    <LogOutIcon strokeWidth={1.5} />
                    <span>выход</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}

