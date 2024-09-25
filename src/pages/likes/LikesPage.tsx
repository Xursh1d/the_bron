import { CategoryButtons } from "@/components/CategoryButtons";
import TitleBar from "@/components/TitleBar";
import { useState } from "react";
import CardGrid from "../../components/CardGrid";

export default function LikesPage() {
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
        <section className="space-y-10">
            <TitleBar title="Избрение" />
            <CategoryButtons />
            <div className="flex flex-col items-center gap-10">
                <CardGrid items={items} title="Дачные дома" />
                <CardGrid items={items} title="Санатори" />
                <CardGrid items={items} title="Чайханы" />
            </div>
        </section>
    )
}
