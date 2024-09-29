import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/pages/auth/AuthProvider";
import { BellRing, Book, HeartIcon, LogOutIcon, MessageCircleMore, UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";

export function SheetDemo() {
    const navigate = useNavigate()
    const { setShowModal } = useAuth()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="w-[86px] sm:hidden h-12 flex justify-between items-center cursor-pointer px-3 rounded-[99px] bg-[#EAF1FF]">
                    <img className="size-4" src="/images/menu.svg" alt="Menu" />
                    <div className="relative">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="size-[17px] -top-1 absolute 
                    -right-2 text-[#F5F5F5] text-[10px] flex items-center 
                    justify-center font-[800] box-content rounded-full bg-[#FF385C]
                    border border-white">1</div>
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between px-2 py-0">
                <SheetHeader className="flex items-center h-12">
                    <SheetTitle className="flex items-center h-full text-[#1F2024] font-bold">Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 relative h-[calc(100%-48px)] ">
                    <Command>
                        <CommandList>
                            <div onClick={() => setShowModal("register")} className="px-3 border-b border-[#D9D9D9] pb-3 text-[18px] flex items-center gap-5 font-[700]">
                                <UserIcon strokeWidth={2} color="#000000" />
                                <span>Account</span>
                            </div>
                            <CommandGroup className="py-3">
                                <CommandItem onClick={() => navigate("/notifications")} className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                                    <BellRing strokeWidth={1.5} />
                                    <span>уведомление</span>
                                </CommandItem>
                                <CommandItem className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                                    <MessageCircleMore strokeWidth={1.5} />
                                    <span>сообщение</span>
                                </CommandItem>
                                <CommandItem onClick={() => navigate("/likes")} className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                                    <HeartIcon strokeWidth={1.5} />
                                    <span>избреные</span>
                                </CommandItem>
                                <CommandItem onClick={() => navigate("/my-reservation")} className="text-[18px] font-[400] cursor-pointer flex gap-5 items-center">
                                    <Book strokeWidth={1.5} />
                                    <span>мои бронирования</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
                <SheetFooter className="h-12">
                    <div className="text-[18px] h-full font-[400] cursor-pointer text-[#E32934]  flex gap-5 items-center">
                        <LogOutIcon />
                        <span>выход</span>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
