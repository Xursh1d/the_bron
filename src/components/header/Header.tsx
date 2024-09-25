import { Link } from "react-router-dom";
import Profile from "./Profile";
import { SheetDemo } from "./SheetDemo";

export default function Header() {
    return (
        <header className="container mx-auto flex items-center justify-between h-16 sm:h-[100px]">
            <Link to="/"><img className="w-[70px] sm:w-auto" src="/images/Logo.svg" alt="Logo" /></Link>
            <div className="flex items-center gap-6 ">
                <div className="flex flex-col items-center gap-1 cursor-pointer">
                    <img className="size-5 sm:size-[21px]" src="/images/language.svg" alt="Language" />
                    <span className="text-[12px] font-bold sm:text-[16px]">Русский</span>
                </div>
                <Profile />
                <SheetDemo />
            </div>
        </header>
    )
}
