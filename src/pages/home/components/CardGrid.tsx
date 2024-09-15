import StarIcon from "@/components/icons/StarIcon";
import { Link } from "react-router-dom";

export const CardGrid = ({ title }: { title: string }) => {
    return (
        <div className="w-full space-y-2 sm:space-y-4">
            <h1 className="text-lg font-semibold text-black sm:text-2xl">{title}</h1>
            <div className="grid w-full grid-cols-2 gap-3 pb-2 sm:pb-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {Array(4).fill(1).map((_, index) => (
                    <Link to={"/restaurant/1"}>
                        <div className="w-full space-y-2 sm:space-y-4" key={index}>
                            <div className="relative xl:h-[330px] sm:h-[290px] h-[165px] rounded-xl md:rounded-[20px] overflow-hidden">
                                <div className="absolute sm:top-5 sm:right-5 top-1 right-1 bg-transparent sm:bg-[#FFFFFFBF] p-2 rounded-md">
                                    <div className="items-center hidden gap-1 sm:flex">
                                        <span className="text-[16px] font-bold leading-[21.82px]">4.1</span>
                                        <StarIcon />
                                    </div>
                                    <img src="/images/heart.svg" alt="Heart" className="block text-white sm:hidden" />
                                </div>
                                <img className="object-cover size-full" src="/images/card.png" alt="Card" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-[16px] sm:text-[20px] font-bold text-[#0A0A0A]">Отель Узбекистан</span>
                                    <img src="/images/heart.svg" alt="Heart" className="hidden sm:block" />
                                </div>
                                <span className="text-[14px] sm:text-[18px] font-normal text-[#7A7A7A]">Расстояние: 2.8 km от цетра</span>
                                <span className="text-[14px] sm:text-[18px] font-normal text-[#7A7A7A]">10-12 марта</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[16px] sm:text-[20px] font-bold text-[#0A0A0A]">125 000 cум</span>
                                    <span className="text-[14px] sm:text-[18px] font-normal text-[#7A7A7A]">ночь</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
