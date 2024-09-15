import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function Header() {
    return (
        <header className="container mx-auto flex items-center justify-between h-[100px]">
            <Link to="/"><img src="/images/Logo.svg" alt="Logo" /></Link>
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-center cursor-pointer">
                    <img src="/images/language.svg" alt="Language" />
                    <span>Русский</span>
                </div>
                <Profile />
            </div>
        </header>
    )
}
