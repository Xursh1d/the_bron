import CardItem from "@/components/CardItem";

interface CardGridProps {
    title: string;
    items: {
        id: number;
        name: string;
        rating: number;
        distance: string;
        dates: string;
        price: string;
        imageSrc: string;
    }[];
}

const CardGrid = ({ title, items }: CardGridProps) => {
    return (
        <div className="w-full space-y-2 sm:space-y-4">
            <h1 className="text-lg font-semibold text-black sm:text-2xl">{title}</h1>
            <div className="grid w-full grid-cols-2 gap-3 pb-2 sm:pb-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {items.map((item) => (
                    <CardItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
