import { Button } from "@/components/ui/button";
import { CategoryButtons } from "../../components/CategoryButtons";
import { SearchBar } from "./components/SearchBar";
import { CarouselDemo } from "./components/CarouselDemo";
import FilterIcon from "@/components/icons/FilterIcon";
import { useState } from "react";
import CardGrid from "../../components/CardGrid";
import { SlidersHorizontal } from "lucide-react";
import SearchDemo from "@/components/SearchDemo";

export default function HomePage() {
    const [items] = useState([
        {
            id: 1,
            name: 'Отель Узбекистан',
            rating: 4.1,
            distance: '2.8 km от центра',
            dates: '10-12 марта',
            price: '125 000 cум',
            imageSrc: '/images/card.png',
        },
        {
            id: 2,
            name: 'Hilton Tashkent',
            rating: 4.5,
            distance: '1.5 km от центра',
            dates: '15-17 марта',
            price: '200 000 cум',
            imageSrc: '/images/card.png',
        },
        {
            id: 3,
            name: 'Radisson Blu',
            rating: 4.3,
            distance: '3.0 km от центра',
            dates: '18-20 марта',
            price: '180 000 cум',
            imageSrc: '/images/card.png',
        },
        {
            id: 4,
            name: 'Ichan Qala Hotel',
            rating: 4.7,
            distance: '2.2 km от центра',
            dates: '22-24 марта',
            price: '220 000 cум',
            imageSrc: '/images/card.png',
        }
    ]);

    return (
        <section className="space-y-4">
            <div className="grid sm:hidden my-2 grid-cols-6 items-center h-[50px] gap-3">
                <SearchDemo containerClassName="col-span-5" className="w-full !rounded-[8px] h-full" placeholder="Search..." />
                <Button variant={"outline"} size="icon" className="col-span-1 h-full bg-white !w-auto">
                    <SlidersHorizontal className="text-primary" />
                </Button>
            </div>
            <CarouselDemo />
            <div className="flex items-center justify-between gap-4 my-5 md:my-10">
                <CategoryButtons />
                <Button className="w-[129px] md:flex hidden !h-12" variant={"outline"} size="md">
                    Фильтр
                    <FilterIcon />
                </Button>
            </div>
            <SearchBar />
            <div className="flex flex-col items-center gap-10">
                <CardGrid items={items} title="Дачные дома" />
                <CardGrid items={items} title="Санатори" />
                <CardGrid items={items} title="Чайханы" />
                <Button className="sm:w-[250px] mb-0 md:mb-10">Показать больше</Button>
                <CardGrid items={items} title="Акции" />
            </div>
        </section>
    );
}
