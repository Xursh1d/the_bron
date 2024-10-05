import StarIcon from "@/components/icons/StarIcon";
import { MapPinIcon } from "lucide-react";
import { ReservationForm } from "./ReservationForm";

export default function RestaurantDetails() {
    return (
        <div className="block space-y-5 sm:hidden">
            <h1 className="text-[22px] font-bold">Ba hao Residence x SANTIPHAL ROOM</h1>
            <div className="border border-gray-200 py-3 rounded-xl h-[51px] grid grid-cols-2">
                <div className="flex items-center border-r border-[#C2C2C2] justify-center gap-2 text-xl font-bold">
                    <StarIcon className="text-[#E7B915]" />
                    <span>4.6</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xl font-bold">
                    <MapPinIcon className="text-[#03559E]" />
                    <span>Tashkent</span>
                </div>
            </div>
            <div className="hidden sm:flex flex-col md:flex-row items-start gap-[30px]">
                <div className="order-2 bg-gray-100 w-full md:w-[63.65%] min-h-[590px] border border-[#C2C2C2] rounded-3xl"></div>
                <ReservationForm />
            </div>
        </div>
    );
}
