import { SelectDemo } from "@/components/SelectDemo";
import { DatePickerDemo } from "@/pages/restaurant/components/DatePickerDemo";
import { TimePickerDemo } from "@/pages/restaurant/components/TimePickerDemo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import * as React from "react";
import PlaceIcon from "@/components/icons/PlaceIcon";
import { useNavigate } from "react-router-dom";

const TimeSlotButtons = ({ timeSlots }: any) => (
    <div className="grid grid-cols-5 gap-2">
        {timeSlots.map((slot: any, index: number) => (
            <Button
                key={slot}
                variant={index == 2 ? "default" : "outline"}
                className={`text-[12px] rounded-[6px] h-10 disabled:bg-gray-300`}
                disabled={index == 4}
            >
                {slot}
            </Button>
        ))}
    </div>
);

const CalendarDisplay = () => (
    <div className="w-full border border-gray-300 rounded-2xl">
        <Calendar
            className="w-full"
            classNames={{
                month: "w-full",
                caption_label: "text-xl font-bold",
                day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "!h-12 !overflow-hidden !rounded-full text-sm sm:!text-lg !size-10 sm:!size-12 !p-0 font-bold cursor-pointer aria-selected:opacity-100"
                ),
                caption: "flex justify-center py-3 relative items-center",
                nav_button_previous: "absolute w-11 border-none rounded h-11 left-1",
                nav_button_next: "absolute right-1 w-11 border-none rounded h-11",
                head_cell: "w-full h-10 flex items-center justify-center",
                row: "flex w-full mt-2 justify-between",
            }}
        />
    </div>
);

const PlacePicker = () => {
    return (
        <div className="w-full h-[337px] rounded-2xl bg-gray-300"></div>
    )
}

export default function BookingPageMobile() {
    const [isFocused, setIsFocused] = React.useState<null | 'time' | 'date' | 'place'>(null);
    const timeSlots = ["11:00", "12:00", "13:00", "14:00", "15:00", "15:00", "15:00", "15:00", "15:00", "15:00"];

    const navigate = useNavigate()

    const renderFocusedComponent = () => {
        if (isFocused === "time") return <TimeSlotButtons timeSlots={timeSlots} />;
        if (isFocused === "date") return <CalendarDisplay />;
        if (isFocused === "place") return <PlacePicker />;
        return null;
    };

    return (
        <div className="w-full h-full mt-5">
            <div className="w-full space-y-4">
                <SelectDemo title="Филиал" />
                <SelectDemo title="Guest number" />
                <SelectDemo title="Place" />
                <div className="grid items-center grid-cols-2 gap-3">
                    <DatePickerDemo setIsFocused={() => setIsFocused("date")} />
                    <TimePickerDemo setIsFocused={() => setIsFocused("time")} />
                </div>
                {renderFocusedComponent()}
                {isFocused !== "place" && <Button onClick={() => setIsFocused('place')} className="w-full !h-12 text-[16px] mb-3">
                    <PlaceIcon />
                    Place
                </Button>}
                <Button onClick={() => navigate('/confirm/pray')} className="w-full h-12 text-[16px] !mb-3">
                    Забронировать
                </Button>
            </div>
        </div>
    );
}
