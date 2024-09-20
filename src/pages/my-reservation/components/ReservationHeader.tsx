import { Badge } from "@/components/ui/badge";
import StarIcon from "@/components/icons/StarIcon";

interface IReservationHeader {
    status?: string;
}
const ReservationHeader = (props: IReservationHeader) => {
    const { status } = props

    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                    <div className="size-[120px]">
                        <img className="object-cover size-full rounded-xl" src="/images/restaurant.svg" alt="IMG" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-xl font-bold">Name of Restaurant</p>
                        <div className="flex items-center gap-2">
                            <p className="text-sm">Tashkent</p>
                            <StarIcon className="size-5 text-[#F7B406]" />
                            <p className="text-lg">5,00</p>
                        </div>
                    </div>
                </div>
                {status == "cancel" && <Badge variant="outline" className="text-xl h-14 border-[#E32934] px-8 text-[#E32934]">
                    Бронь отменена
                </Badge>}
            </div>
            <div className="flex flex-col items-end justify-center gap-2">
                <p className="text-[16px] font-semibold">Итого(сумм)</p>
                <p className="text-xl font-bold">000 000сумм</p>
            </div>
        </div>
    );
};

export default ReservationHeader;
