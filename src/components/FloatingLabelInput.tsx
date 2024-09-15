import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

interface FloatingLabelInputProps {
    label: string;
    id: string;
    type: "date" | "time"
}

export function FloatingLabelInput({ label, id, type }: FloatingLabelInputProps) {
    return (
        <div className="relative w-full">
            <Input
                id={id}
                type={type}
                className="peer h-[56px] w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                placeholder={label}
            />
            <Label
                htmlFor={id}
                className="pointer-events-none absolute left-3 top-2 text-[12px] font-bold text-muted-foreground transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-primary"
            >
                {label}
            </Label>
        </div>
    );
}
