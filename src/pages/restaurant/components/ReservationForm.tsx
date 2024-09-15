import { SelectDemo } from "@/components/SelectDemo";
import { DatePickerDemo } from "@/components/DatePickerDemo";
import { TimePickerDemo } from "@/components/TimePickerDemo";
import { Button } from "@/components/ui/button";

export const ReservationForm = () => (
    <div className="w-[36.35%] py-6 px-5 rounded-3xl min-h-[360px] border border-[#C2C2C2] space-y-3">
        <SelectDemo title="Филиал" />
        <SelectDemo title="Guest number" />
        <SelectDemo title="Place" />
        <div className="grid items-center grid-cols-2 gap-3">
            <DatePickerDemo />
            <TimePickerDemo />
        </div>
        <Button className="w-full">Бронировать</Button>
    </div>
);
