import { Button } from "@/components/ui/button";
import HotelIcon from "@/components/icons/HotelIcon";
import KitchenIcon from "@/components/icons/KitchenIcon";
import GameIcon from "@/components/icons/GameIcon";
import AirPlanIcon from "@/components/icons/AirPlanIcon";
import RestaurantIcon from "@/components/icons/RestaurantIcon";
import TrainIcon from "@/components/icons/TrainIcon";
import LagerIcon from "@/components/icons/LagerIcon";
import HomeIcon from "@/components/icons/HomeIcon";

export const CategoryButtons = () => {
    return (
        <div className="flex items-center w-full md:w-[calc(100%-140px)] overflow-auto hide-scroll gap-4">
            <Button variant={"default"} size="md">Все</Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><HotelIcon /></div>Отели
            </Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><KitchenIcon /></div>Чайхана</Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><GameIcon /></div> Game club
            </Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><AirPlanIcon /></div> Самолет
            </Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><RestaurantIcon /></div> Ресторан
            </Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><TrainIcon /></div> Поезд
            </Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><LagerIcon /></div> Лагерь
            </Button>
            <Button variant={"secondary"} size="md">
                <div className="size-4 sm:size-5"><HomeIcon /></div> Дача
            </Button>
        </div>
    );
};
