import { Button } from "@/components/ui/button";
import { CategoryButtons } from "./components/CategoryButtons";
import { SearchBar } from "./components/SearchBar";
import { CardGrid } from "./components/CardGrid";
import { CarouselDemo } from "./components/CarouselDemo";
import FilterIcon from "@/components/icons/FilterIcon";

export default function HomePage() {
    return (
        <section>
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
                <CardGrid title="Дачные дома" />
                <CardGrid title="Санатори" />
                <CardGrid title="Чайханы" />
                <Button className="sm:w-[250px] mb-0 md:mb-10">Показать больше</Button>
                <CardGrid title="Акции" />
            </div>
        </section>
    );
}
