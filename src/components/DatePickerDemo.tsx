import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./ui/label";

export function DatePickerDemo() {
    const [date, setDate] = React.useState<Date>();

    return (
        <div className="relative w-full">
            <Label
                htmlFor="date-picker"
                className={cn(
                    "absolute left-4 top-1 text-[12px] text-black font-bold transition-all",
                    date
                        ? "text-xs top-1.5 text-primary"
                        : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm"
                )}
            >
                Дата
            </Label>

            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date-picker"
                        variant={"outline"}
                        className={cn(
                            "peer w-full justify-start text-left !text-[16px] font-normal pt-7",
                            !date && "text-muted-foreground"
                        )}
                    >
                        {date ? date.toLocaleDateString() : <span className="opacity-1">Дата</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
