import { SelectDemo } from "@/components/SelectDemo";
import { DatePickerDemo } from "@/pages/restaurant/components/DatePickerDemo";
import { TimePickerDemo } from "@/pages/restaurant/components/TimePickerDemo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export default function BookingPageMobile() {
    return (
        <div className='w-full h-full '>
            <div className="w-full order-1 md:order-2 md:w-[36.35%] py-6 px-5 rounded-3xl min-h-[360px] border border-[#C2C2C2] space-y-3">
                <SelectDemo title="Филиал" />
                <SelectDemo title="Guest number" />
                <SelectDemo title="Place" />
                <div className="grid items-center grid-cols-2 gap-3">
                    <DatePickerDemo />
                    <TimePickerDemo />
                </div>
                <div className="w-full">
                    <Calendar className="w-full"
                        classNames={{
                            month: "w-full",
                            caption_label: "text-2xl font-bold",
                            day: cn(
                                buttonVariants({ variant: "ghost" }),
                                "!h-12 !overflow-hidden !rounded-full !text-lg !w-12 !p-0 font-bold cursor-pointer aria-selected:opacity-100"
                            ),
                            caption: "flex justify-center  !py-3 relative items-center",
                            cell: "",
                            nav_button_previous: "absolute !w-11  !border-none rounded !h-11 left-1",
                            nav_button_next: "absolute right-1 !w-11  !border-none rounded !h-11",
                            head_cell: "w-full h-10 flex items-center justify-center",
                            row: "flex  w-full !mt-2 justify-between",
                        }} />
                </div>
                <Button className="w-full">Бронировать</Button>
            </div>
        </div>
    )
}
