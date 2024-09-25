import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface CheckboxProps {
    label?: string
    className?: string
}

export function CheckboxDemo(props: CheckboxProps) {
    const { label, className } = props;

    return (
        <div className="flex items-center space-x-2">
            <Checkbox className={cn("size-6 rounded", className)} id="terms" />
            <label
                htmlFor="terms"
                className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    )
}
