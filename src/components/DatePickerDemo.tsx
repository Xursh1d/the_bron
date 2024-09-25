import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "./ui/label"

interface IDatePickerDemoProps {
    label?: string
    className?: string
    error?: string
}

export function DatePickerDemo(props: IDatePickerDemoProps) {
    const { label, error, className } = props
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <div className="space-y-1">
                {label && <Label className="font-bold text-[16px]" htmlFor="">{label}</Label>}
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            `w-full h-14 text-[16px] justify-start text-left font-normal ${error && "border-[#C13515] focus:!ring-[#C13515]"}`,
                            !date && "text-muted-foreground", className
                        )}
                    >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <p className="text-sm text-[#C13515]">{error}</p>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </div>
        </Popover>
    )
}
