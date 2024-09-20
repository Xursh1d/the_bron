import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Label } from "../../../components/ui/label";

export function TimePickerDemo() {
    const [time, setTime] = React.useState<string>();

    return (
        <div className="relative w-full">
            <Label
                htmlFor="time-picker"
                className={cn(
                    "absolute left-4 top-1 text-[12px] text-black font-bold transition-all",
                    time
                        ? "text-xs top-1.5 text-primary"
                        : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm"
                )}
            >
                Время
            </Label>
            <Input
                type={"text"}
                className={cn(
                    "peer w-full  justify-start text-left h-[56px] rounded-[10px] !text-[16px] font-normal pt-7",
                    !time && "text-muted-foreground"
                )}
                placeholder={"Время"}
                onChange={(e) => setTime(e.target.value)}
            />
        </div>
    );
}
