import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Label } from "../../../components/ui/label";

interface DatePickerDemoProps {
    setIsFocused: React.Dispatch<React.SetStateAction<'date' | 'time' | null>>;
}
export function DatePickerDemo({ setIsFocused }: DatePickerDemoProps) {
    const [date, setdate] = React.useState<string>();

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
            <Input
                type={"text"}
                className={cn(
                    "peer w-full  justify-start text-left h-[56px] rounded-[10px] !text-[16px] font-normal pt-7",
                    !date && "text-muted-foreground"
                )}
                onFocus={() => setIsFocused("date")}
                placeholder={"Дата"}
                onChange={(e) => setdate(e.target.value)}
            />
        </div>
    );
}
