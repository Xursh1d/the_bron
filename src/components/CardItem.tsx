import { Link } from "react-router-dom";

import StarIcon from "@/components/icons/StarIcon";

interface CardRatingProps {
    rating: number;
}

interface CardItemProps {
    id: number;
    name: string;
    rating: number;
    distance: string;
    dates: string;
    price: string;
    imageSrc: string;
}

const CardItem = ({ id, name, rating, distance, dates, price, imageSrc }: CardItemProps) => (
    <Link to={`/restaurant/${id}`} className="w-full space-y-2 sm:space-y-4">
        <div className="relative xl:h-[330px] sm:h-[290px] h-[165px] rounded-xl md:rounded-[20px] overflow-hidden">
            <CardRating rating={rating} />
            <img className="object-cover size-full" src={imageSrc} alt={name} />
        </div>
        <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <span className="text-[16px] sm:text-[20px] font-bold text-[#0A0A0A]">{name}</span>
                <img src="/images/heart.svg" alt="Heart" className="hidden sm:block" />
            </div>
            <span className="text-[14px] sm:text-[18px] font-normal text-[#7A7A7A]">{distance}</span>
            <span className="text-[14px] sm:text-[18px] font-normal text-[#7A7A7A]">{dates}</span>
            <div className="flex items-center gap-2">
                <span className="text-[16px] sm:text-[20px] font-bold text-[#0A0A0A]">{price}</span>
                <span className="text-[14px] sm:text-[18px] font-normal text-[#7A7A7A]">ночь</span>
            </div>
        </div>
    </Link>
);

export default CardItem;


const CardRating = ({ rating }: CardRatingProps) => (
    <div className="absolute sm:top-5 sm:right-5 top-1 right-1 bg-transparent sm:bg-[#FFFFFFBF] p-2 rounded-md">
        <div className="items-center hidden gap-1 sm:flex">
            <span className="text-[16px] font-bold leading-[21.82px]">{rating}</span>
            <StarIcon className="text-[#F7B406]" />
        </div>
        <img src="/images/white-heart.svg" alt="Heart" className="block text-white sm:hidden size-5" />
        {/* <img src="/images/red-heart.svg" alt="Heart" className="block text-white sm:hidden size-5" /> */}
    </div>
);

