import { Button } from "@/components/ui/button";
import SearchIcon from "@/components/icons/SearchIcon";

export const SearchBar = () => {
    return (
        <div className="justify-center hidden w-full h-16 my-5 sm:flex md:my-10 md:h-20">
            <div className="w-full md:w-[810px] h-full flex justify-between items-center border border-[#C2C2C2] rounded-[68px] p-2 shadow">
                <input
                    type="text"
                    className="text-lg font-normal px-4 md:px-7 lg:w-[calc(100%-64px)] w-[calc(100%-48px)] h-full rounded-[68px] outline-none"
                    placeholder="Поиск направлений"
                />
                <Button className="rounded-full size-12 md:size-16">
                    <SearchIcon />
                </Button>
            </div>
        </div>
    );
};
